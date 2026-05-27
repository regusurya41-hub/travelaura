import axios from "axios";
import { env } from "../config/env.js";

const cache = new Map();

export async function getWeather(destination) {
  const key = destination.toLowerCase();
  const cached = cache.get(key);

  if (cached && Date.now() - cached.createdAt < 1000 * 60 * 10) {
    return cached.value;
  }

  if (!env.OPENWEATHER_API_KEY) {
    const fallback = {
      destination,
      summary: "Weather API not configured, using demo conditions.",
      condition: "sunny",
      temperature: 24
    };
    cache.set(key, { value: fallback, createdAt: Date.now() });
    return fallback;
  }

  const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      q: destination,
      units: "metric",
      appid: env.OPENWEATHER_API_KEY
    }
  });

  const condition = data.weather?.[0]?.main?.toLowerCase() || "sunny";
  const value = {
    destination,
    summary: data.weather?.[0]?.description || "Current destination weather",
    condition: condition.includes("rain") ? "rainy" : condition.includes("cloud") ? "mild" : "sunny",
    temperature: Math.round(data.main.temp)
  };

  cache.set(key, { value, createdAt: Date.now() });
  return value;
}
