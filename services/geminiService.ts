
import { GoogleGenAI } from "@google/genai";

export async function getSalesInsights(salesData: any[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Based on the following sales data: ${JSON.stringify(salesData)}, give me a 2-sentence punchy insight in the style of a aggressive business consultant. Keep it short.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return "Sales are moving. Keep pushing the boundaries or get left behind.";
  }
}
