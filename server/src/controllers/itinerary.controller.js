import { generateItinerary } from "../services/openai.service.js";

async function create(req, res) {
  const itinerary = await generateItinerary(req.body);
  res.json({ itinerary });
}

export const itineraryController = { create };
