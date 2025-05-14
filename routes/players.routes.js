import { Router } from "express";
import { createPlayer, deletePlayer, getPlayerById, getPlayers, updatePlayer } from "../controllers/players.controllers.js";
import { validateBody } from './../middlewares/validateBody.js';
import { playerSchema } from "../utiles/playerValidator.js";
import { upload } from "../middlewares/upload.js";

const router = Router();
router.route("/getAll").get(getPlayers);
router.route("/getPlayerById/:id").get(getPlayerById);
router.route("/create").post(validateBody(playerSchema),upload.single("image"),createPlayer);
router.route("/update/:id").patch(validateBody(playerSchema),upload.single("image"),updatePlayer);
router.route("/delete/:id").delete(deletePlayer);

export default router