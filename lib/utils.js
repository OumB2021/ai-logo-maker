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
