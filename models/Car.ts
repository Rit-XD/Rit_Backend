import mongoose from "mongoose";
const Schema = mongoose.Schema;
const CarSchema = new Schema({
  licensePlate: {
    type: String,
    required: true,
  },
});

export const Cars = mongoose.model("Cars", CarSchema);
