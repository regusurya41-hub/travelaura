import OpenAI from "openai";
import { env } from "../config/env.js";

const client = env.OPENAI_API_KEY ? new OpenAI({ apiKey: env.OPENAI_API_KEY }) : null;

function fallbackItinerary({ destination, days, mood, budget }) {
  return {
    destination,
    title: `${days}-day ${mood} escape in ${destination}`,
    summary: `A ${budget} travel plan with a ${mood} pace, balanced between signature sights and breathing room.`,
    mood,
    budget,
    days: Array.from({ length: Number(days) || 3 }, (_, index) => ({
      day: index + 1,
      title: index === 0 ? "Arrival and first impressions" : index === Number(days) - 1 ? "Slow finish and favorites" : "Signature local rhythm",
      activities: [
        { time: "09:00", label: "Neighborhood anchor", note: "Start with a walkable district that sets the mood without rushing the day." },
        { time: "13:00", label: "Local table", note: "Choose a restaurant near the next stop to reduce transit friction." },
        { time: "17:30", label: "Golden-hour highlight", note: "Save the most cinematic viewpoint or cultural stop for softer light." }
      ]
    }))
  };
}

export async function generateItinerary(input) {
  if (!client) return fallbackItinerary(input);

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    response_format: { type: "json_object" },
    messages: [
      {
        role: "system",
        content: "Return a JSON itinerary with destination, title, summary, mood, budget, and days. Each day has day, title, and activities with time, label, note."
      },
      {
        role: "user",
        content: JSON.stringify(input)
      }
    ]
  });

  return JSON.parse(response.choices[0].message.content);
}
