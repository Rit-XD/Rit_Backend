import { Carecenter } from "../models/Carecenter";
import {Request, Response} from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const create = async (req: Request, res: Response) => {
    let c = new Carecenter();
    c.name = req.body.name;
    c.password = req.body.password;
    c.address = req.body.address;
    c.phone = req.body.phone;
    c.email = req.body.email;
    if(!req.body.logo) {
        c.logo = "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png";
    } else {
        c.logo = req.body.logo;
    }
    c.cars = req.body.cars;

    //checks
    if(c.password != req.body.passwordCheck){
        return res.json({
            status: "error",
            message: "Passwords don't match",
        });
    }
    if(await Carecenter.findOne({email: c.email})) {
        return res.json({
            status: "error",
            message: "Email already in use",
        });
    }
    if(await Carecenter.findOne({name: c.name})) {
        return res.json({
            status: "error",
            message: "Name already in use",
        });
    }

    const salt = await bcrypt.genSalt(10);
    c.password = await bcrypt.hash(c.password, salt);

    c.save().then((result) => {
        let token = jwt.sign(
            {
              uid: result._id,
              name: result.name,
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
}

export const login = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    Carecenter.findOne({email: email}).then((result) => {
        if(result){
            bcrypt.compare(password, result.password, (err, isMatch) => {
                if(isMatch){
                    let token = jwt.sign(
                        {
                          uid: result._id,
                          name: result.name,
                        },
                        process.env.TOKEN_SECRET as string
                      );
                    res.json({
                        status: "success",
                        data: token,
                    });
                } else {
                    res.json({
                        status: "error",
                        message: "Invalid password",
                    });
                }
            });
        } else {
            res.json({
                status: "error",
                message: "No user found with this email",
            });
        }
    });
}



