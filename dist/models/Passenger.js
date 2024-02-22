"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Passenger = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Carecenter_1 = require("./Carecenter");
const Schema = mongoose_1.default.Schema;
const PassengerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    careCenter: {
        type: Object,
        ref: Carecenter_1.Carecenter,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: false,
    },
});
exports.Passenger = mongoose_1.default.model("Passengers", PassengerSchema);
