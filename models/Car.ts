import mongoose from "mongoose";
const Schema = mongoose.Schema;
const CarSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  fuel: {
    type: String,
    required: true,
  },
  range: {
    type: Number,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  licensePlate: {
    type: String,
    required: true,
  },
  passengerSeats: {
    type: Number,
    required: true,
  },
  wheelChairCapacity: {
    type: Number,
    required: true,
  },
  vehicleInsurance: {
    type: String,
    required: true,
  },
  vehicleRegistration: {
    type: String,
    required: true,
  },
});

export const Car = mongoose.model("Cars", CarSchema);
