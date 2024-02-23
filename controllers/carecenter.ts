import { Carecenter } from "../models/Carecenter";
import {Request, Response} from 'express';
import bcrypt from "bcrypt";



export const create = async (req: Request, res: Response) => {
    console.log(req);
    let c = new Carecenter();
    c.name = req.body.name;
    c.password = req.body.password;
    c.address = req.body.address;
    c.phone = req.body.phone;
    c.email = req.body.email;
    c.logo = req.body.logo;
    c.cars = req.body.cars;

    //checks

    const salt = await bcrypt.genSalt(10);
    c.password = await bcrypt.hash(c.password, salt);

    c.save().then((result) => {
        res.json({
            status: "success",
        });
    });
}



