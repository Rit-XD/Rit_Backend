import { create, login } from "../controllers/carecenter";
import express from "express";

export const router = express.Router();

router.post("/create", create);
router.post("/login", login);