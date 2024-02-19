import mongoose from "mongoose";
import { Passengers } from "./Passenger";
import { Cars } from "./Car";
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
    ref: Passengers,
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
    ref: Cars,
    required: true,
  },
});

export const Rides = mongoose.model("Carecenters", RideSchema);
