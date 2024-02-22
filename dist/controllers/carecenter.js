"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const Carecenter_1 = require("../models/Carecenter");
const bcrypt_1 = __importDefault(require("bcrypt"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    let c = new Carecenter_1.Carecenter();
    c.name = req.body.name;
    c.password = req.body.password;
    c.address = req.body.address;
    c.phone = req.body.phone;
    c.email = req.body.email;
    c.logo = req.body.logo;
    c.cars = req.body.cars;
    //checks
    const salt = yield bcrypt_1.default.genSalt(10);
    c.password = yield bcrypt_1.default.hash(c.password, salt);
    c.save().then((result) => {
        res.json({
            status: "success",
        });
    });
});
exports.create = create;
