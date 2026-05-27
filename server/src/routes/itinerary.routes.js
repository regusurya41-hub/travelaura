import { Router } from "express";
import { itineraryController } from "../controllers/itinerary.controller.js";

const router = Router();

router.post("/generate", itineraryController.create);

export default router;
