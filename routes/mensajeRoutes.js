import express from "express";
import { addMensaje, getData } from "../controllers/mensajeController.js";

const router = express.Router();

router.post("/", addMensaje);
router.get("/:id", getData);

export default router;
