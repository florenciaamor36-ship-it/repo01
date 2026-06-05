const express = require("express");
const router = express.Router();

router.get("/status", (req, res) => {
  res.json({ status: "Agent is active", timestamp: new Date() });
});

module.exports = router;
