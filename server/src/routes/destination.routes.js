import { Router } from "express";
import { destinationController } from "../controllers/destination.controller.js";

const router = Router();

router.get("/", destinationController.list);
router.get("/:id", destinationController.detail);

export default router;
