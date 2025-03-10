import { AILogoPrompt, chat } from "@/config/gemini-config";
import { extractJsonFromString } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // ✅ Step 1: Extract the prompt from the request
    const { prompt } = await req.json();
    if (!prompt) {
      throw new Error("Missing prompt in request body");
    }

    // ✅ Step 2: Send request to Gemini AI to generate the logo prompt
    let AIPromptResult;
    try {
      AIPromptResult = await chat.sendMessage(prompt);
      console.log("AI Response:", AIPromptResult.response.text());
    } catch (error) {
      throw new Error(`Gemini AI Error: ${error.message}`);
    }

    // ✅ Step 3: Extract JSON from AI response
    let extractedJson;
    try {
      extractedJson = extractJsonFromString(AIPromptResult.response.text());
      if (!extractedJson || Object.keys(extractedJson).length === 0) {
        throw new Error("Extracted JSON is empty or undefined");
      }
    } catch (error) {
      throw new Error(`JSON Extraction Error: ${error.message}`);
    }

    console.log("extracted json: " + extractedJson.prompt);

    // ✅ Step 4: Send request to Hugging Face API to generate the logo
    let response;
    try {
      response = await fetch(
        "https://router.huggingface.co/hf-inference/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA",
        {
          headers: {
            Authorization: `Bearer ${process.env.MIDJOURNEY_HEADER_KEY}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(extractedJson.prompt),
        }
      );

      if (!response.ok) {
        const errorBody = await response.text(); // Read error details if provided
        throw new Error(
          `Hugging Face API Error: ${response.status} ${response.statusText} - ${errorBody}`
        );
      }
    } catch (error) {
      throw new Error(`Hugging Face API Request Failed: ${error.message}`);
    }

    // ✅ Step 5: Convert response to image format
    let imageWithMime;
    try {
      const data = await response.arrayBuffer();
      const buffer = Buffer.from(data);
      const base64Image = buffer.toString("base64");
      imageWithMime = `data:image/png;base64,${base64Image}`;
      console.log("Generated Image Successfully");
    } catch (error) {
      throw new Error(`Error processing image data: ${error.message}`);
    }

    console.log(imageWithMime);
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
