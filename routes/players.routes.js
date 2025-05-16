import { Router } from "express";
import { createPlayer, deletePlayer, getPlayerById, getPlayers, sortSearchPlayers, updatePlayer } from "../controllers/players.controllers.js";
import { validateBody } from './../middlewares/validateBody.js';
import { playerSchema } from "../utiles/playerValidator.js";
import { upload } from "../middlewares/upload.js";

const router = Router();
router.route("/getAll").get(getPlayers);
router.route("/getPlayerById/:id").get(getPlayerById);
router.route("/create").post(upload.single("image"), validateBody(playerSchema), createPlayer);
router.route("/update/:id").patch(upload.single("image"), validateBody(playerSchema), updatePlayer);
router.route("/delete/:id").delete(deletePlayer);
router.route("/sortSearchPlayers").get(sortSearchPlayers);

export default router