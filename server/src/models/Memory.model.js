import mongoose from "mongoose";

const memorySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
    destinationId: String,
    note: String,
    mediaUrl: String,
    mood: String
  },
  { timestamps: true }
);

export const Memory = mongoose.models.Memory || mongoose.model("Memory", memorySchema);
