import "dotenv/config";
import { z } from "zod";

const schema = z.object({
  PORT: z.coerce.number().default(8080),
  CLIENT_URL: z.string().url().default("http://127.0.0.1:5173"),
  MONGODB_URI: z.string().optional(),
  JWT_SECRET: z.string().default("local-travelaura-secret-change-me"),
  OPENAI_API_KEY: z.string().optional(),
  OPENWEATHER_API_KEY: z.string().optional(),
  MAPBOX_TOKEN: z.string().optional()
});

export const env = schema.parse(process.env);
