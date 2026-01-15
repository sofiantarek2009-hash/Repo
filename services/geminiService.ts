import { GoogleGenAI, Type } from "@google/genai";
import { JollyRecommendation } from "../types";

// Safe initialization that works even if process.env isn't set
const API_KEY = process.env.API_KEY || (window as any).process?.env?.API_KEY || '';
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getJollyRecommendation = async (mood: string): Promise<JollyRecommendation> => {
  // DEMO MODE: If no API Key is detected, simulate a response so the UI still works
  if (!API_KEY || API_KEY === 'YOUR_API_KEY_HERE') {
    console.warn("Running in DEMO MODE (No API Key). Returning simulated data.");
    await new Promise(r => setTimeout(r, 1500)); // Fake network delay
    return {
      snackCombo: "DEMO: The 'Broke & Happy' Special",
      tagline: "You didn't set an API key, but you still deserve chips!",
      partyTip: "Config your .env file to unlock real AI powers!"
    };
  }

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
    return {
      snackCombo: "A Classic Mojito & Spicy Chips",
      tagline: "Turn that frown upside down in the bouncy house!",
      partyTip: "Jump first, drink fizzy stuff second!"
    };
  }
};