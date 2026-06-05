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
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/chat", chatRoutes);
app.use("/api/agent", agentRoutes);

// Fallback for SPA or simple index
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
