import { create } from "../controllers/volunteer";
import express from "express";

export const router = express.Router();

router.post("/create", create);
