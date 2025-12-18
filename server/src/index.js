import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import urlRoute from "./routes/checkUrl.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// UPDATED CORS CONFIGURATION
app.use(
  cors({
    origin: [
      "http://localhost:5173", 
      "http://localhost:5174", 
      process.env.CLIENT_URL
    ].filter(Boolean), // Filters out undefined if CLIENT_URL is not set
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is Healthy!");
});

app.use("/api/analyze", urlRoute);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});