import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    travelStyle: { type: String, default: "balanced" },
    favoriteMoods: [{ type: String }]
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
