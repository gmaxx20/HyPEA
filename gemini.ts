
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";
const genAI = new GoogleGenAI({ apiKey: API_KEY });

export const chatWithProceres = async (message: string, procerName: string) => {
  const model = "gemini-3-flash-preview";
  
  const systemInstructions = `
    Actúa como ${procerName}, una figura histórica clave de la educación argentina. 
    Responde preguntas sobre tu vida, obra y visión de la educación en Argentina. 
    Mantén un tono formal, educativo y apasionado acorde a la época. 
    Si eres Sarmiento, sé enérgico con la civilización y el progreso. 
    Si eres Alberdi, enfócate en las bases y el derecho.
    Responde siempre en español.
  `;

  try {
    const response = await genAI.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: systemInstructions,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Lo siento, mi conexión con el tiempo se ha interrumpido momentáneamente. Inténtalo de nuevo pronto.";
  }
};
