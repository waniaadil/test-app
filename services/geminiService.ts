
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "System Architect" for the 90-Day Health Reset. 
Your goal is to answer potential students' questions about the program, health optimization, sleep architecture, and systemized discipline.
Be professional, encouraging, and clear. 
The 90-Day Reset is built on the philosophy that "You are not the problem, your system is."
Phases:
1. Stabilize: Focus on sleep, hydration, movement.
2. Rebuild: Focus on strength, macros, habit stacking.
3. Transform: Focus on deep discipline and self-mastery.
Answer briefly and focus on how the program solves their specific problems (lack of energy, poor sleep, inconsistent motivation).
`;

export const askArchitect = async (question: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error('Error calling Gemini:', error);
    return "I'm currently recalibrating the system. Please try again in a moment.";
  }
};
