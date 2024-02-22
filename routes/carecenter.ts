import { create } from "../controllers/carecenter";
import express from "express";

export const router = express.Router();

router.post("/create", create);