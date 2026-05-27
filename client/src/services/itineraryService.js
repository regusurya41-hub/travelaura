import { api } from "./api";

export async function generateItinerary(payload) {
  const { data } = await api.post("/itineraries/generate", payload);
  return data.itinerary;
}
