import mongoose from "mongoose";
import { Passenger } from "./Passenger";
import { Car } from "./Car";
const Schema = mongoose.Schema;
const RideSchema = new Schema({
  origin: {
    type: [String],
    required: true,
  },
  destination: {
    type: [String],
    required: true,
  },
  passengers: {
    type: [Object],
    ref: Passenger,
    required: true,
  },
  originAdress: {
    type: String,
    required: true,
  },
  destinationAdress: {
    type: String,
    required: true,
  },
  volunteer: {
    type: Object,
    required: true,
  },
  timeStamp: {
    type: Date,
    required: true,
  },
  careCenter: {
    type: Object,
    required: true,
  },
  car: {
    type: Object,
    ref: Car,
    required: true,
  },
});

export const Ride = mongoose.model("Rides", RideSchema);
