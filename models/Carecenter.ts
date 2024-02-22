import mongoose from "mongoose";
import { Car } from "./Car";

const Schema = mongoose.Schema;
const CarecenterSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  cars: {
    type: [Object],
    ref: "Car",
    required: true,
  },
});

export const Carecenter = mongoose.model("Carecenters", CarecenterSchema);
