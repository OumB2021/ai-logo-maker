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

    let extractedText = jsonMatch[0];

    // ✅ Remove Markdown symbols that break JSON
    extractedText = extractedText.replace(/\*\*|[*]/g, ""); // Removes `**bold**` and `*bullets*`

    // ✅ Fix unescaped newlines (replaces newlines with spaces, but preserves intended line breaks inside values)
    extractedText = extractedText.replace(/\n/g, " ");

    // ✅ Remove trailing commas before closing brackets (if any)
    extractedText = extractedText.replace(/,(\s*[}\]])/g, "$1");

    // ✅ Parse the cleaned JSON string
    const extractedJson = JSON.parse(extractedText);

    return extractedJson;
  } catch (error) {
    console.error("Error extracting JSON:", error.message);
    return null;
  }
}

export function converToSubCurrency(amount = 0.5, factor = 100) {
  return Math.round(amount * factor);
}
