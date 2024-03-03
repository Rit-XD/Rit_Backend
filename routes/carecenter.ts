import { create, get } from "../controllers/carecenter";
import express from "express";

export const router = express.Router();

router.post("/create", create);
router.get("/:id", get);
// router.post("/login", login);