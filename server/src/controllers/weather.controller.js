import { getWeather } from "../services/weather.service.js";

async function current(req, res) {
  const weather = await getWeather(req.query.destination || "Kyoto");
  res.json({ weather });
}

export const weatherController = { current };
