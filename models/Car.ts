import mongoose from "mongoose";
const Schema = mongoose.Schema;
const CarSchema = new Schema({
  licensePlate: {
    type: String,
    required: true,
  },
});

export const Car = mongoose.model("Cars", CarSchema);
