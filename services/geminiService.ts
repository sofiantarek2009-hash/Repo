import { GoogleGenAI, Type } from "@google/genai";
import { JollyRecommendation } from "../types";

// Safe initialization that works even if process.env isn't set
const API_KEY = process.env.API_KEY || (window as any).process?.env?.API_KEY || '';

// Only initialize Gemini if we actually have a key to avoid errors in console
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

// ==========================================
// 🧠 SOPHISTICATED MOCK AI ENGINE
// ==========================================
// This ensures the app works beautifully on GitHub without a paid key.
const generateMockResponse = (input: string): JollyRecommendation => {
  const text = input.toLowerCase();
  
  if (text.includes('tired') || text.includes('sleep') || text.includes('exhausted') || text.includes('study')) {
    return {
      snackCombo: "The 'Wake-Up Call' (Red Bull Mojito + Wasabi Peas)",
      tagline: "Sleep is for the weak. Bouncing is for the strong.",
      partyTip: "Nap for 5 mins in the corner, then RAGE."
    };
  }
  
  if (text.includes('hungry') || text.includes('food') || text.includes('starv')) {
    return {
      snackCombo: "The 'Mega Munch' (Loaded Nachos + 2 Drinks)",
      tagline: "Empty stomach? Not on our watch.",
      partyTip: "Eat AFTER bouncing, trust us."
    };
  }

  if (text.includes('sad') || text.includes('depress') || text.includes('cry') || text.includes('bad')) {
    return {
      snackCombo: "Comfort Combo (Sweet Mojito + Chocolate)",
      tagline: "Dopamine hit incoming.",
      partyTip: "Scream your lungs out in the castle. It's therapy."
    };
  }

  if (text.includes('party') || text.includes('hype') || text.includes('excited') || text.includes('happy')) {
    return {
      snackCombo: "The 'Party Animal' (Neon Fizz + Spicy Doritos)",
      tagline: "Match your energy with our sugar rush.",
      partyTip: "Challenge the staff to a jump-off."
    };
  }

  if (text.includes('love') || text.includes('crush') || text.includes('date')) {
    return {
      snackCombo: "The 'Sweetheart' (2 Straws, 1 Cup)",
      tagline: "Rizz up your date with a bounce pass.",
      partyTip: "Don't fall (unless it's for someone)."
    };
  }

  // Random fallback responses for unknown inputs
  const fallbacks = [
    {
      snackCombo: "The 'Mystery Mix'",
      tagline: "Chaos flavors for a chaotic vibe.",
      partyTip: "Do a backflip. Do it."
    },
    {
      snackCombo: "Classic Mojito & Salted Chips",
      tagline: "Keep it classy, keep it bouncing.",
      partyTip: "Take a selfie mid-air."
    },
    {
      snackCombo: "Blue Lagoon & Popcorn",
      tagline: "Taste the blue.",
      partyTip: "Try not to spill your drink."
    }
  ];

  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
};

export const getJollyRecommendation = async (mood: string): Promise<JollyRecommendation> => {
  // 1. SIMULATION MODE (Primary for GitHub Pages / No Key users)
  if (!API_KEY || API_KEY.includes('placeholder')) {
    console.log("🚀 Using Local Intelligence Engine (Mock AI)");
    await new Promise(r => setTimeout(r, 2000)); // Simulate "thinking" delay for effect
    return generateMockResponse(mood);
  }

  // 2. REAL AI MODE (If user provides a key)
  try {
    if (!ai) throw new Error("AI not initialized");
    
    const modelId = "gemini-3-flash-preview";
    const prompt = `
      You are the hype-man for a bouncy house carnival project called 'Jollypop'.
      User feeling: "${mood}".
      Recommend a funny snack combo and a tagline.
      Return JSON: { snackCombo, tagline, partyTip }.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            snackCombo: { type: Type.STRING },
            tagline: { type: Type.STRING },
            partyTip: { type: Type.STRING }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response text");
    return JSON.parse(text) as JollyRecommendation;

  } catch (error) {
    console.warn("Gemini API unavailable, switching to backup engine.", error);
    // Graceful fallback to Mock AI if API fails
    return generateMockResponse(mood);
  }
};