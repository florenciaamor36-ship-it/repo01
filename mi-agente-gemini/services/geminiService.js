const genAI = require("../config/gemini");

async function generateResponse(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error in GeminiService:", error);
    throw error;
  }
}

module.exports = {
  generateResponse,
};
