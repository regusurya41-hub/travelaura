import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export function requireAuth(req, _res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    const error = new Error("Authentication required");
    error.status = 401;
    return next(error);
  }

  try {
    req.user = jwt.verify(token, env.JWT_SECRET);
    return next();
  } catch {
    const error = new Error("Invalid token");
    error.status = 401;
    return next(error);
  }
}
