import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const model = "@cf/black-forest-labs/flux-1-schnell";
const API_URL = `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFARE_ACCOUNT_ID}/ai/run/${model}`;

async function callCloudflareAPI() {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CLOUDFARE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: "Generate an image of a futuristic cityscape.",
        width: 512,
        height: 512,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Cloudflare API Error: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    const data = await response.json();
    console.log("API Response:", data);
  } catch (error) {
    console.error(`Cloudflare API Request Failed: ${error.message}`);
  }
}

callCloudflareAPI();
