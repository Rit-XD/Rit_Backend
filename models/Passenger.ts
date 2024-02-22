import mongoose from "mongoose";
import { Carecenter } from "./Carecenter";
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
    type: Object, ref: Carecenter,
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

export const Passenger = mongoose.model("Passengers", PassengerSchema);