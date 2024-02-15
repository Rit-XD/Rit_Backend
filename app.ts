import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import indexRouter from "./routes/index";
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB_CONNECTION);


//For env File
dotenv.config();

const app: Application = express();
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
