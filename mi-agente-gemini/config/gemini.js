const { GoogleGenerativeAI } = require("@google/generative-ai");

// Assumes dotenv is loaded in the entry point (server.js)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = genAI;
