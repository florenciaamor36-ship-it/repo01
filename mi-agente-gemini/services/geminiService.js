const genAI = require("../config/gemini");

async function generateResponse(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error in GeminiService:", error);

    // Check for specific "service disabled" error
    if (error.message && error.message.includes("SERVICE_DISABLED")) {
        throw new Error("La API de Gemini está desactivada para este proyecto. Por favor, actívala en Google Cloud Console.");
    }

    throw error;
  }
}

module.exports = {
  generateResponse,
};
