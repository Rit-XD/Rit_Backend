import mongoose from "mongoose";
import { Carecenters } from "./Carecenter";
const Schema = mongoose.Schema;
const PassengerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  careCenter: {
    type: Object, ref: Carecenters,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
    
});

export const Passengers = mongoose.model("Passengers", PassengerSchema);