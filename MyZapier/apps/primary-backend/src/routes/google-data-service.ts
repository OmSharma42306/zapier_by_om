import express, { Request, Response } from "express";
import {  prismaClient as client} from "@repo/db"
import { GOOGLE_DATA } from "@repo/google";

const { syncGoogleDrive } = GOOGLE_DATA;
const router = express.Router();

router.get('/getGoogleDataInfo',async(req:Request,res:Response)=>{
    try{
        // const userId = req.userId;
        const userId = 5;
        const googleAuth : any = await client.user.findMany({
            select:{
                googleAuth : true
            },
            where:{
                id : userId
            }
        });

        const access_token = googleAuth[0].googleAuth[0].accessToken;
        const refresh_token = googleAuth[0].googleAuth[0].refreshToken

        const data = await syncGoogleDrive(access_token,refresh_token);
        res.status(200).json({msg:data});
        return;
    }catch(error){
        res.status(400).json({msg : error});
        return;
    }
})

export const googleDataServiceRouter = router;