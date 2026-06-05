const express = require("express");
const router = express.Router();
const { generateResponse } = require("../services/geminiService");
const { formatResponse, handleError } = require("../utils/helpers");

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ success: false, message: "Message is required" });
    }
    const response = await generateResponse(message);
    res.json(formatResponse({ response }));
  } catch (error) {
    handleError(res, error, "Failed to generate response");
  }
});

module.exports = router;
