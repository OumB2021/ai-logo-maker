import { AILogoPrompt, chat } from "@/config/gemini-config";
import { extractJsonFromString } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();
  try {
    // Generate AI text prompt for logo
    const AIPromptResult = await chat.sendMessage(prompt);
    const extractedJson = extractJsonFromString(AIPromptResult.response.text());
    console.log(extractedJson);
    return NextResponse.json("Heello");
  } catch (error) {
    console.error("Error generating AI prompt:", error);
    return NextResponse.json(
      { error: "Failed to generate AI prompt" },
      { status: 500 }
    );
  }
}
