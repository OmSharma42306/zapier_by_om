import { NextFunction,Response,Request } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET : string | undefined = process.env.JWT_SECRET;

async function authMiddleware(req:Request,res:Response,next:NextFunction){
    
    const authHeader = req.headers["authorization"];
    try{
        if(!authHeader || authHeader.startsWith("Bearer ")){
            res.json({msg:"Missing Headers!"});
        }
    
        const token : string | undefined = authHeader?.split(' ')[1];
        const decodedToken = await jwt.verify(token as string,JWT_SECRET as string)
        if(!decodedToken){
            res.json({msg:"Middleware Failed!"});
        }
    
        // @ts-ignore
        
        req.userId = decodedToken.id;
    
        next();
    
    }catch(error){
        res.json({error});
    }
}

export default authMiddleware;