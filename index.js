// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (like CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Route for index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for regulation.html
app.get("/regulation", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "regulation-panel.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
