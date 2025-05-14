import { Router } from "express";
import { createPlayer } from "../controllers/players.controllers.js";

const router = Router();
router.route("/create").post(createPlayer);

export default router