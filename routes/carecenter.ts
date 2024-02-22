import { create } from "../controllers/Carecenter";
import express from "express";

export const router = express.Router();

router.post("/create", create);