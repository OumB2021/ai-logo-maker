import { db } from "@/config/firebase-config";
import { chat } from "@/config/gemini-config";
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

    // ✅ Determine if the response is JSON or raw image data
    const contentType = response?.headers.get("Content-Type");

    let imageWithMime;
    if (contentType && contentType.includes("json")) {
      // If Cloudflare API returns a JSON response with an image URL
      const result = await response.json();
      imageWithMime = result.image_url;
    } else {
      // If Cloudflare API returns raw image data (rare case)
      const data = await response.arrayBuffer();
      const base64Image = Buffer.from(data).toString("base64");
      imageWithMime = `data:image/png;base64,${base64Image}`;
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
