import { GoogleGenAI, Type } from "@google/genai";
import { JollyRecommendation } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getJollyRecommendation = async (mood: string): Promise<JollyRecommendation> => {
  const modelId = "gemini-3-flash-preview";
  
  const prompt = `
    You are the hype-man for a bouncy house carnival project called 'Jollypop' at NIS Mart. 
    We sell mojitos (mocktails), drinks, chips, and have a bouncy house.
    
    The user is currently feeling: "${mood}".
    
    Recommend a specific combo of our items (Mojitos, Chips, Bouncy House time) to make them feel better or sustain their energy.
    Also provide a funny, short tagline to convince them to take our survey.
    
    Return the response as JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            snackCombo: { type: Type.STRING, description: "The recommended snack/drink/activity combo" },
            tagline: { type: Type.STRING, description: "A catchy, energetic one-liner" },
            partyTip: { type: Type.STRING, description: "A short, fun tip for the event" }
          },
          required: ["snackCombo", "tagline", "partyTip"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text");
    
    return JSON.parse(text) as JollyRecommendation;

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback in case of API failure to keep the vibe alive
    return {
      snackCombo: "A Classic Mojito & Spicy Chips",
      tagline: "Turn that frown upside down in the bouncy house!",
      partyTip: "Jump first, drink fizzy stuff second!"
    };
  }
};