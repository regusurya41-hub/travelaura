import mongoose from "mongoose";
import { env } from "./env.js";

export async function connectDb() {
  if (!env.MONGODB_URI) {
    console.log("MongoDB skipped: MONGODB_URI is not configured.");
    return;
  }

  await mongoose.connect(env.MONGODB_URI);
  console.log("MongoDB connected.");
}
