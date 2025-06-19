const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

// Load football items data
const footballData = require("./football.json");

// API route to send football item titles
app.get("/api/football", (req, res) => {
  res.json(footballData);
});

// Start server
app.listen(port, () => {
  console.log(`⚽ Server running at http://localhost:${port}`);
});
