import { Request, Response } from "express";
import { Volunteer } from "../models/Volunteer";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const create = async (req: Request, res: Response) => {
  const volunteer = new Volunteer();
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
  const salt = await bcrypt.genSalt(10);

  //set user password to hashed password
  volunteer.password = await bcrypt.hash(volunteer.password, salt);

  // save user to database
  volunteer.save().then((result) => {
    let token = jwt.sign(
      {
        uid: volunteer._id,
        name: volunteer.firstName + " " + volunteer.lastName,
      },
      process.env.TOKEN_SECRET as string
    );
    res.json({
      status: "success",
      data: {
        token: token,
      },
    });
  });
};

export const login = async (req: Request, res: Response) => {
  const body = req.body;
  const volunteer = await Volunteer.findOne({ email: body.email });
  if (volunteer) {
    const validatePassword = await bcrypt.compare(
      body.password,
      volunteer.password
    );

    if (validatePassword) {
      let token = jwt.sign(
        {
          uid: volunteer._id,
          email: volunteer.email,
        },
        process.env.TOKEN_SECRET as string
      );

      res.json({
        status: "success",
        token: token,
        name: volunteer.firstName + " " + volunteer.lastName,
      });
    } else {
      res.json({
        status: "error",
        message: "Wachtwoord is niet correct",
      });
    }
  } else {
    res.json({
      status: "error",
      message: "Gebruiker niet gevonden",
    });
  }
};
