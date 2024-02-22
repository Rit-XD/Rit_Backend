"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
exports.Car = mongoose_1.default.model("Cars", CarSchema);
