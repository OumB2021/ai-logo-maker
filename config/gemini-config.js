import "dotenv/config";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: "Hello" }],
    },
    {
      role: "model",
      parts: [{ text: "Great to meet you. What would you like to know?" }],
    },
  ],
});

// export const chat = model.startChat({
//   history: [
//     {
//       role: "user",
//       parts: ["JSON.parse(store)"],
//     },
//     {
//       role: "model",
//       parts: [
//         'You\'ve provided the code `JSON.parse(store)`.  This is a JavaScript code snippet that attempts to parse a JSON string stored in the variable `store`.\n\nHere\'s a breakdown and considerations:\n\n* **`JSON.parse()`:** This is a built-in JavaScript function.  It takes a JSON string as input and converts it into a JavaScript object (or array, or primitive type) that represents the data encoded in the JSON.\n* **`store`:** This is a variable.  It *must* contain a string that is valid JSON.  If `store` does not contain a valid JSON string, `JSON.parse()` will throw a `SyntaxError`.\n\n**Example:**\n\n```javascript\nconst store = \'{"name": "John Doe", "age": 30, "city": "New York"}\';\n\ntry {\n  const parsedObject = JSON.parse(store);\n  console.log(parsedObject.name); // Output: John Doe\n  console.log(parsedObject.age);   // Output: 30\n} catch (error) {\n  console.error("Error parsing JSON:", error);\n}\n```\n\n**Important Considerations:**\n\n1. **Error Handling:**  Always wrap `JSON.parse()` in a `try...catch` block. This is crucial to handle potential `SyntaxError` exceptions that occur when the string in `store` is not valid JSON.  Without error handling, your script will crash.\n\n2. **Valid JSON:**  The string in `store` must adhere strictly to the JSON specification:\n   * Keys must be enclosed in double quotes (e.g., `"name": "value"`).\n   * Strings must be enclosed in double quotes.\n   * Booleans must be `true` or `false` (lowercase).\n   * Numbers must be valid numbers.\n   * `null` is the JSON representation of a null value.\n   * No trailing commas are allowed in objects or arrays.\n\n3. **Data Type:** The result of `JSON.parse()` will be a JavaScript object, array, string, number, boolean, or null, depending on the JSON string it parsed.\n\n4. **`store`\'s Origin:** Where does the `store` variable come from?  Is it read from a file, received from an API response, or constructed in your code?  Understanding its origin is essential for debugging potential issues.\n\n5. **Security (if `store` comes from external sources):** If the `store` string originates from an untrusted source (e.g., user input, an external API), be extremely careful.  While `JSON.parse()` itself isn\'t typically a direct security vulnerability, the data *within* the JSON might influence other parts of your application and lead to vulnerabilities like Cross-Site Scripting (XSS) if you improperly handle it.  Always sanitize and validate the data after parsing it.\n\n**In summary:**\n\nThe `JSON.parse(store)` code is a common and useful way to convert a JSON string into a JavaScript object. However, you *must* ensure the `store` variable contains valid JSON, and you *should* always use error handling to prevent your code from crashing if parsing fails.  Also, be mindful of security implications if the JSON data comes from an untrusted source.\n',
//       ],
//     },
//     {
//       role: "user",
//       parts: [
//         "Generate a text prompt to create Logo for Logo Title/Brand name: Indian restaurant  with description: Indian chef cooking biryani, with Color combination of Fiery Passion and include Vintage Logo idea and referring to this logo Prompt: A classic and nostalgic vintage logo with retro typography, warm earthy tones, and distressed textures for an authentic old-school feel. Give me the result in JSON portal with prompt field only",
//       ],
//     },
//     {
//       role: "model",
//       parts: [
//         '```json\n{\n  "prompt": "Create a vintage logo for an Indian restaurant. The logo should feature an Indian chef enthusiastically cooking biryani over a traditional stove.  Employ retro typography evocative of classic Indian restaurant signage. Use a color palette of \'Fiery Passion\' (reds, oranges, yellows - conveying spice and warmth) and warm earthy tones ( browns, ochres, and creams) to ground the design.  Incorporate distressed textures to give the logo an authentic, aged feel. Aim for a classic, nostalgic, and old-school vibe."\n}\n```\n',
//       ],
//     },
//   ],
// });
