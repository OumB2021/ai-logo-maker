import { db } from "@/config/firebase-config";
import { chat } from "@/config/gemini-config";
import { replicate } from "@/config/replicate-config";
import { extractJsonFromString } from "@/lib/utils";
import { doc, setDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // ✅ Step 1: Extract the prompt from the request
    const { prompt, email, title, desc, type } = await req.json();
    if (!prompt) {
      throw new Error("Missing prompt in request body");
    }

    // ✅ Step 2: Send request to Gemini AI to generate the logo prompt
    let AIPromptResult;
    try {
      AIPromptResult = await chat.sendMessage(prompt);
    } catch (error) {
      throw new Error(`Gemini AI Error: ${error.message}`);
    }

    // ✅ Step 3: Extract JSON from AI response
    let extractedJson;
    try {
      extractedJson = extractJsonFromString(AIPromptResult.response.text());
    } catch (error) {
      throw new Error(`JSON Extraction Error: ${error.message}`);
    }

    // ✅ Step 4: Send request to Hugging Face API to generate the logo
    let response;
    let imageWithMime = "";

    if (type === "Free") {
      try {
        const model = "@cf/stabilityai/stable-diffusion-xl-base-1.0";
        const API_URL = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFARE_ACCOUNT_ID}/ai/run/${model}`;

        response = await fetch(API_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.CLOUDFARE_API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: extractedJson.prompt }),
        });

        if (!response.ok) {
          const errorText = await response.text(); // Store error response once
          throw new Error(
            `Cloudflare API Error: ${response.status} ${response.statusText} - ${errorText}`
          );
        }
      } catch (error) {
        console.error(`Cloudflare API Request Failed: ${error.message}`);
        throw new Error(`Cloudflare API Request Failed: ${error.message}`);
      }

      const data = await response.arrayBuffer();
      const base64Image = Buffer.from(data).toString("base64");
      imageWithMime = `data:image/png;base64,${base64Image}`;
    } else if (type === "Premium") {
      // Premium AI logo generation logic goes here
      try {
        const output = await replicate.run(
          "bytedance/hyper-flux-8step:81946b1e09b256c543b35f37333a30d0d02ee2cd8c4f77cd915873a1ca622bad",
          {
            input: {
              prompt: extractedJson.prompt,
              num_outputs: 1,
              aspect_ratio: "1:1",
              output_format: "png",
              guidance_scale: 3.5,
              output_quality: 80,
              num_inference_steps: 8,
            },
          }
        );

        if (!output || output.length === 0) {
          throw new Error("Replicate API did not return any Image");
        }

        const imageUrl = output[0];
        const imageResponse = await fetch(imageUrl);

        if (!imageResponse.ok) {
          throw new Error(
            `Failed to fetch image from Replicate: ${imageResponse.status} ${imageResponse.statusText}`
          );
        }

        const imageData = await imageResponse.arrayBuffer();
        const base64Image = Buffer.from(imageData).toString("base64");
        imageWithMime = `data:image/png;base64,${base64Image}`;
      } catch (error) {
        console.error(`Replicate API Request Failed: ${error.message}`);
        throw new Error(`Replicate API Request Failed: ${error.message}`);
      }
    } else {
      throw new Error("Invalid type specified");
    }

    // try {
    //   await setDoc(doc(db, "users", email, "logos", Date.now().toString()), {
    //     image: imageWithMime,
    //     title: title,
    //     desc: desc,
    //     timestamp: new Date().toISOString(),
    //   });
    // } catch (error) {
    //   console.error("Error saving to Firestore:", error.message);
    // }

    // ✅ Step 6: Return the image URL or base64-encoded image
    return NextResponse.json({ image: imageWithMime });
  } catch (error) {
    console.error("Error generating AI logo:", error.message);

    return NextResponse.json(
      { error: error.message || "Unexpected error occurred" },
      { status: 500 }
    );
  }
}
