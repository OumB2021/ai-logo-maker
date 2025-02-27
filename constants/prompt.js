const Prompt = {
  DESIGN_IDEA_PROMPT: `
    Generate unique logo ideas based on the following details:
    - Logo Type: {logoType}
    - Brand Name: {logoTitle}
    - Description: {logoDescription}
    - Design Concept: {logoPrompt}

    Provide a list of **creative, visually appealing, and relevant** logo ideas based on the above details.
    The ideas should be concise, unique, and professional.
  `,
};

export default Prompt;
