import { client } from "./config/cloudfare-config.js";

async function generateImage() {
  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/74c70b116b6b2815668869efacf0e118/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer pFPzeQQRVdCpLVm7ofJOICMBzCM685CXz-NQ3i5-`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "Create a nice image with sunshine",
        }),
      }
    );
    console.log("response: " + response);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Cloudflare API Error: ${response.status} - ${errorText}`
      );
    }

    const result = await response.json();
    console.log("Generated Image:", result.image_url);
  } catch (error) {
    console.error("Error generating image:", error.message);
  }
}

generateImage();
