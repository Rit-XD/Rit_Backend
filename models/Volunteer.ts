import mongoose from "mongoose";
const Schema = mongoose.Schema;
const VolunteerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  license: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
});

export const Volunteer = mongoose.model("Volunteers", VolunteerSchema);
