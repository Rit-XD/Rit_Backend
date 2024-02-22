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
exports.login = exports.create = void 0;
const Volunteer_1 = require("../models/Volunteer");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const volunteer = new Volunteer_1.Volunteer();
    volunteer.firstName = req.body.firstName;
    volunteer.lastName = req.body.lastName;
    volunteer.email = req.body.email;
    volunteer.password = req.body.password;
    volunteer.dateOfBirth = req.body.dateOfBirth;
    volunteer.city = req.body.city;
    volunteer.phone = req.body.phone;
    volunteer.license = req.body.license;
    volunteer.picture = req.body.picture;
    //check if password is empty
    if (volunteer.password == "") {
        return res.json({
            status: "error",
            message: "Password can't be empty",
        });
    }
    //check if password check is the same
    if (volunteer.password != req.body.passwordCheck) {
        return res.json({
            status: "error",
            message: "Passwords don't match",
        });
    }
    //check if user is 18y or older
    let birthDate = new Date(volunteer.dateOfBirth);
    if ((Date.now() - birthDate.getDate()) / 31556952000 < 18) {
        return res.json({
            status: "error",
            message: "User must me 18 years or over",
        });
    }
    //generate salt to hash password
    const salt = yield bcrypt_1.default.genSalt(10);
    //set user password to hashed password
    volunteer.password = yield bcrypt_1.default.hash(volunteer.password, salt);
    // save user to database
    volunteer.save().then((result) => {
        let token = jsonwebtoken_1.default.sign({
            uid: volunteer._id,
            name: volunteer.firstName + " " + volunteer.lastName,
        }, process.env.TOKEN_SECRET);
        res.json({
            status: "success",
            data: {
                token: token,
            },
        });
    });
});
exports.create = create;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const volunteer = yield Volunteer_1.Volunteer.findOne({ email: body.email });
    if (volunteer) {
        const validatePassword = yield bcrypt_1.default.compare(body.password, volunteer.password);
        if (validatePassword) {
            let token = jsonwebtoken_1.default.sign({
                uid: volunteer._id,
                email: volunteer.email,
            }, process.env.TOKEN_SECRET);
            res.json({
                status: "success",
                token: token,
                name: volunteer.firstName + " " + volunteer.lastName,
            });
        }
        else {
            res.json({
                status: "error",
                message: "Wachtwoord is niet correct",
            });
        }
    }
    else {
        res.json({
            status: "error",
            message: "Gebruiker niet gevonden",
        });
    }
});
exports.login = login;
