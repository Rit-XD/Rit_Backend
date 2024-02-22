import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import indexRouter from "./routes/index";
import mongoose from "mongoose";
require("dotenv").config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION as string);

import { router as carecenterRouter }  from "./routes/carecenter";
import { router as volunteerRouter } from "./routes/volunteer";

//For env File
dotenv.config();

export const app: Application = express();
const port = process.env.PORT || 8000;

app.set("view engine", "jade");
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`not live http://localhost:${port}`);
});

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use("/api/carecenter", carecenterRouter);
app.use("/api/volunteer", volunteerRouter);
