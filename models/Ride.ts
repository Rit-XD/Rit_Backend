import mongoose from "mongoose";
import { Passengers } from "./Passenger";
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
  carecenter: {
    type: Object,
    required: true,
  },
});

export const Rides = mongoose.model("Carecenters", RideSchema);
