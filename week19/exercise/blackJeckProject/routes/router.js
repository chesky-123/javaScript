import express from "express";
import { createPlayer, startRound } from "../ctrls/postCtrl.js";
import { getPlayerById } from "../ctrls/getCtrl.js";
import { isInProgres, isPlayerFound, isValidBet } from "../middlwares/postMiddlware.js";

export const router = express.Router();


router.get("/player", getPlayerById);

router.post("/startGame", createPlayer);

router.post("/start-round", isPlayerFound, isInProgres, isValidBet, startRound)