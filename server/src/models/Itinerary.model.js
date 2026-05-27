import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    time: String,
    label: String,
    note: String
  },
  { _id: false }
);

const daySchema = new mongoose.Schema(
  {
    day: Number,
    title: String,
    activities: [activitySchema]
  },
  { _id: false }
);

const itinerarySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    destination: String,
    title: String,
    summary: String,
    mood: String,
    budget: String,
    days: [daySchema],
    shareSlug: { type: String, index: true }
  },
  { timestamps: true }
);

export const Itinerary = mongoose.models.Itinerary || mongoose.model("Itinerary", itinerarySchema);
