"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ride = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Passenger_1 = require("./Passenger");
const Car_1 = require("./Car");
const Schema = mongoose_1.default.Schema;
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
        ref: Passenger_1.Passenger,
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
        ref: Car_1.Car,
        required: true,
    },
});
exports.Ride = mongoose_1.default.model("Rides", RideSchema);
