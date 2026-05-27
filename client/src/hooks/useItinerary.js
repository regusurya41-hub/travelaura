import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { generateItinerary } from "../services/itineraryService";

export function useItinerary() {
  return useMutation({
    mutationFn: generateItinerary,
    onSuccess: () => toast.success("Your itinerary is ready"),
    onError: (error) => toast.error(error.message)
  });
}
