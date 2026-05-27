import { api } from "./api";
import { destinations } from "../constants/destinations";

export async function fetchDestinations(filters = {}) {
  try {
    const { data } = await api.get("/destinations", { params: filters });
    return data.destinations;
  } catch {
    return destinations.filter((destination) => {
      if (filters.mood && destination.mood !== filters.mood) return false;
      return true;
    });
  }
}

export async function fetchDestination(id) {
  try {
    const { data } = await api.get(`/destinations/${id}`);
    return data.destination;
  } catch {
    return destinations.find((destination) => destination.id === id) || destinations[0];
  }
}
