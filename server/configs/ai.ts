import { GoogleGenAI } from "@google/genai";

// Standard initialization for the new @google/genai SDK
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY as string
});

export default ai;