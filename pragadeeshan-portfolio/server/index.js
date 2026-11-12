import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ status: "ok", message: "Portfolio API is running" }));

// Contact form endpoint. Configure SMTP or a form provider here to deliver messages.
// For now, submissions are validated and logged by the server.
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "Please complete all fields." });
  }
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!validEmail) return res.status(400).json({ error: "Please enter a valid email address." });
  console.log(`Portfolio contact from ${name} <${email}>: ${message}`);
  return res.json({ success: true, message: "Thanks! Your message was received by the demo API." });
});

if (process.env.NODE_ENV === "production") {
  const dist = path.resolve(__dirname, "../dist");
  app.use(express.static(dist));
  app.get("*", (_req, res) => res.sendFile(path.join(dist, "index.html")));
}
app.listen(PORT, () => console.log(`Portfolio server running at http://localhost:${PORT}`));