import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    console.warn("Missing VITE_GEMINI_API_KEY in environment variables");
}

const genAI = new GoogleGenerativeAI(API_KEY || "");

export interface EnhancementResult {
    rating: number;
    improvedPrompt: string;
    suggestions: string[];
    explanation: string;
}

export const enhancePrompt = async (prompt: string): Promise<EnhancementResult> => {
    if (!API_KEY) {
        throw new Error("API key not configured");
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const systemPrompt = `
    You are an expert prompt engineer. Your task is to analyze the given prompt, rate it, and improve it.
    
    Input Prompt: "${prompt}"
    
    Return a JSON object with the following structure:
    {
      "rating": number (1-10),
      "improvedPrompt": "The improved version of the prompt",
      "suggestions": ["List of 3 specific tips to improve the prompt"],
      "explanation": "Brief explanation of why the changes were made"
    }
    
    Ensure the improved prompt uses best practices like assigning a persona, being specific, specifying output format, etc.
    Return ONLY the JSON object, no markdown formatting.
  `;

    try {
        const result = await model.generateContent(systemPrompt);
        const response = await result.response;
        const text = response.text();

        // Clean up potential markdown code blocks if Gemini adds them
        const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();

        return JSON.parse(cleanText) as EnhancementResult;
    } catch (error) {
        console.error("Error enhancing prompt:", error);
        throw new Error("Failed to enhance prompt");
    }
};
