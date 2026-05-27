import rateLimit from "express-rate-limit";

export const aiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 25,
  standardHeaders: true,
  legacyHeaders: false
});
