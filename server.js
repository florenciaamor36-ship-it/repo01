const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const chatRoutes = require("./routes/chat");
const agentRoutes = require("./routes/agent");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static assets from public folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/chat", chatRoutes);
app.use("/api/agent", agentRoutes);

// Serve index.html from root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Fallback for SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
