const Prompt = {
  DESIGN_IDEA_PROMPT: `Based on Logo type {logoType} Generate a text prompt to create Logo for Logo title/Brand name: {logoTitle} with description: {logoDesc} and refering to prompt: {logoPrompt}. Give me 8/9 suggestion of logo idea (each idea with a maximum 4-5 words), Result in JSON format.`,

  LOGO_PROMPT:
    'Generate a highly detailed and precise text prompt to create a logo for the following brand: **Brand Name:** {logoTitle}, **Description:** {logoDesc}, **Primary Color Palette:** {logoColor}, **Design Style:** {logoDesign}, and **Reference Logo Prompt:** {logoPrompt}. The logo should strongly reflect the brand’s identity, ensuring it conveys its mission and uniqueness in an impactful way. It must include meaningful iconography, symbols, or graphical elements that enhance visual storytelling while maintaining clarity and professionalism. The color scheme should evoke the right emotions while ensuring high contrast and readability. Typography should align with the brand’s tone, whether bold and modern, vintage and classic, sleek and futuristic, or playful and creative. The composition should be balanced, visually appealing, and adaptable for use across different platforms, including print, digital, branding, and merchandise. It must be scalable, ensuring clarity and readability at any size, from app icons to billboards. The design should follow modern branding trends while retaining a timeless appeal, making it both memorable and professional. Ensure the logo maintains aesthetic integrity on light and dark backgrounds, as well as transparent formats. The final result should be provided in **JSON format** with a single field named prompt containing a rich, structured, and high-quality prompt that enables precise AI-generated logo creation. Example output: { "prompt": "Design a sleek and professional logo for {logoTitle}, a brand focused on {logoDesc}. The design should include {logoDesign} elements with a harmonious color scheme of {logoColor}. The typography should be clean, modern, and legible, ensuring a balance between professionalism and brand identity. Use a structured composition with a scalable layout, making it ideal for digital platforms, business branding, and merchandise. The style should align with {logoPrompt} for a visually striking and memorable logo.',
};

export default Prompt;
