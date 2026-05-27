import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true, index: true },
    name: { type: String, required: true },
    country: { type: String, required: true },
    mood: { type: String, required: true },
    weatherMood: { type: String, default: "sunny" },
    price: { type: String, default: "balanced" },
    image: String,
    summary: String,
    highlights: [String],
    coordinates: [Number]
  },
  { timestamps: true }
);

export const Destination = mongoose.models.Destination || mongoose.model("Destination", destinationSchema);
