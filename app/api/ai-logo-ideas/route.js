import { model } from "@/config/gemini-config";
import { cleanJsonString, extractJsonString } from "@/lib/utils";

export async function POST(req) {
  try {
    const { prompt } = await req.json(); // Get the prompt from request body

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt is required" }), {
        status: 400,
      });
    }

    const result = await model.generateContent(prompt);
    if (!result) {
      return new Response(
        JSON.stringify({ error: "Failed to generate content" }),
        { status: 500 }
      );
    }

    const responseText = await result.response.text();

    const extractedJson = extractJsonString(responseText);
    const parsedIdeas = JSON.parse(extractedJson);
    return new Response(JSON.stringify({ ideas: parsedIdeas }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to generate logo ideas" }),
      { status: 500 }
    );
  }
}
