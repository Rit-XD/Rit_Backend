import { Carecenter } from "../models/Carecenter";
import {Request, Response} from 'express';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



export const create = async (req: Request, res: Response) => {
    let c = new Carecenter();
    c.name = req.body.name;
    c.supaBaseId = req.body.supaBaseId;
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
    if(await Carecenter.findOne({name: c.name})) {
        return res.json({
            status: "error",
            message: "Name already in use",
        });
    }

    c.save().then((result) => {
        res.json({
            status: "success",
            data: {
                uid: c.supaBaseId,
            },
        });
    });
}
export const get = async (req: Request, res: Response) => {
    console.log(req.params.id);
    await Carecenter.findOne({supaBaseId: req.params.id}).then((result) => {
        console.log(result);
        res.json({
            status: "success",
            data: result,
        });
    });
}

// export const login = async (req: Request, res: Response) => {
//     const email = req.body.email;
//     const password = req.body.password;

//     Carecenter.findOne({email: email}).then((result) => {
//         if(result){
//             bcrypt.compare(password, result.password, (err, isMatch) => {
//                 if(isMatch){
//                     let token = jwt.sign(
//                         {
//                           uid: result._id,
//                           name: result.name,
//                         },
//                         process.env.TOKEN_SECRET as string
//                       );
//                     res.json({
//                         status: "success",
//                         data: token,
//                     });
//                 } else {
//                     res.json({
//                         status: "error",
//                         message: "Invalid password",
//                     });
//                 }
//             });
//         } else {
//             res.json({
//                 status: "error",
//                 message: "No user found with this email",
//             });
//         }
//     });
// }



