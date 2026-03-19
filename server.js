import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static files
app.use(express.static(path.join(__dirname, "dist")));

// React fallback
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// 🔥 IMPORTANT
const PORT = process.env.PORT || 3000;

// 🔥 MUST listen properly
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
