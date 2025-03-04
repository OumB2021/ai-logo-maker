const Prompt = {
  DESIGN_IDEA_PROMPT: `Based on Logo type {logoType} Generate a text prompt to create Logo for Logo title/Brand name: {logoTitle} with description: {logoDesc} and refering to prompt: {logoPrompt}. Give me 8/9 suggestion of logo idea (each idea with a maximum 4-5 words), Result in JSON format.`,

  LOGO_PROMPT: `Generate a text prompt to create Logo for Logo Title/Brand name: {logoTitle}  with description: {logoDesc}, with Color combination of {logoColor} and include {logoDesign} idea and referring to this logo Prompt: {logoPrompt} Give me the result in JSON portal with prompt field only`,
};

export default Prompt;
