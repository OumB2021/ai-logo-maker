import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function extractJsonString(inputString) {
  // Use regex to find the first valid JSON object/array
  const match = inputString.match(/\{[\s\S]*\}|\[[\s\S]*\]/);
  return match ? match[0] : null; // Returns extracted JSON or null if not found
}

export function extractJsonFromString(inputString) {
  try {
    const jsonMatch = inputString.match(/\{[\s\S]*\}/);

    if (!jsonMatch) throw new Error("No JSON found in the input string");

    // Parse the extracted JSON string
    const extractedJson = JSON.parse(jsonMatch[0]);

    return extractedJson;
  } catch (error) {
    console.error("Error extracting JSON:", error.message);
    return null;
  }
}
