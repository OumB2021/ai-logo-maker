export async function POST(req) {
  try {
    const { prompt } = await req.json(); // Get the prompt from request body

    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt is required" }), {
        status: 400,
      });
    }

    console.log(prompt);

    // Mock AI response - Replace this with your AI generation logic
    const generatedIdeas = [
      "Happy logo with gear",
      "Friendly cloud with rain",
      "Minimalist sun with a smile",
      "Bold lightning bolt mascot",
      "Playful panda with glasses",
      "Sleek futuristic owl",
      "Vibrant fireball icon",
      "Retro-inspired rocket",
      "Elegant floral typography",
    ];

    return new Response(JSON.stringify({ ideas: generatedIdeas }), {
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
