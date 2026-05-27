import { useMemo, useState } from "react";
import { destinations } from "../constants/destinations";

export function useMoodQuery(initialMood = "serene") {
  const [mood, setMood] = useState(initialMood);

  const results = useMemo(
    () => destinations.filter((destination) => destination.mood === mood),
    [mood]
  );

  return { mood, setMood, results };
}
