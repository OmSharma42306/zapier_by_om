import { NextFunction,Response,Request } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const JWT_SECRET : string | undefined = process.env.JWT_SECRET;

interface AuthRequest extends Request{
    userId? : string;
}


async function authMiddleware(req:AuthRequest,res:Response,next:NextFunction){
    console.log("i am here!")
    const authHeader = req.headers["authorization"];
    console.log(authHeader)
    try{
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            res.json({msg:"Missing Headers!"});
        }
    
        const token : string | undefined = authHeader?.split(' ')[1];
        const decodedToken = await jwt.verify(token as string,JWT_SECRET as string)
        if(!decodedToken){
            res.json({msg:"Middleware Failed!"});
        }
        console.log("Successfully! token created!",token)
    
        // @ts-ignore
        
        req.userId = decodedToken.id;
        
        console.log("calling next function!")
        next();
    
    }catch(error){
        res.json({error});
    }
}

export default authMiddleware;