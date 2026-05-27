import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorHandler.js";
import { aiRateLimit } from "./middleware/rateLimit.js";
import authRoutes from "./routes/auth.routes.js";
import destinationRoutes from "./routes/destination.routes.js";
import itineraryRoutes from "./routes/itinerary.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import { weatherController } from "./controllers/weather.controller.js";
import { env } from "./config/env.js";

export const app = express();

app.use(helmet());
app.use(cors({ origin: env.CLIENT_URL, credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "travelaura-api" });
});

app.use("/api/auth", authRoutes);
app.use("/api/destinations", destinationRoutes);
app.use("/api/itineraries", aiRateLimit, itineraryRoutes);
app.use("/api/ai", aiRateLimit, aiRoutes);
app.get("/api/weather", weatherController.current);

app.use(errorHandler);
