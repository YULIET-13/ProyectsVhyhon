import jwt from "jsonwebtoken";
// import { Secret } from "../db.js";
import { SECRET } from "../config.js";


export const validatetoken = async (req,res,next) => {
    const accessToken = req.header('Authorization');
    if(!accessToken) return res.status(403).json({message: 'Usuario no logueado'})
    try {
        const validtoken = jwt.verify(accessToken,SECRET);

        next()
    } catch (error) {
        return res.status(401).json({error: error.message});
        
    }
}
