import { generateItinerary } from "../services/openai.service.js";

async function itinerary(req, res) {
  const result = await generateItinerary(req.body);
  res.json({ itinerary: result });
}

export const aiController = { itinerary };
