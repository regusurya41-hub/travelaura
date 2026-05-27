import { Router } from "express";
import { aiController } from "../controllers/ai.controller.js";

const router = Router();

router.post("/itinerary", aiController.itinerary);

export default router;
