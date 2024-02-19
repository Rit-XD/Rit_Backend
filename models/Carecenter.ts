import mongoose from "mongoose";
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
});

export const Carecenters = mongoose.model("Carecenters", CarecenterSchema);
