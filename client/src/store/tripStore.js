import { create } from "zustand";

export const useTripStore = create((set) => ({
  savedTrips: JSON.parse(localStorage.getItem("travelaura_saved_trips") || "[]"),
  saveTrip: (trip) =>
    set((state) => {
      const savedTrips = [{ ...trip, id: crypto.randomUUID(), savedAt: new Date().toISOString() }, ...state.savedTrips];
      localStorage.setItem("travelaura_saved_trips", JSON.stringify(savedTrips));
      return { savedTrips };
    }),
  removeTrip: (id) =>
    set((state) => {
      const savedTrips = state.savedTrips.filter((trip) => trip.id !== id);
      localStorage.setItem("travelaura_saved_trips", JSON.stringify(savedTrips));
      return { savedTrips };
    })
}));
