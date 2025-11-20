import express, { Request, Response } from "express";
import { GOOGLE_DATA ,GOOGLE_TOKEN_MANAGER } from "@repo/google";

const { syncGoogleDrive } = GOOGLE_DATA;
const { googleTokenManager } = GOOGLE_TOKEN_MANAGER;
const router = express.Router();

router.get('/getGoogleDataInfo',async(req:Request,res:Response)=>{
    try{
        // const userId = req.userId;
        const userId = 5;

        const googleAuthInfo : any = await googleTokenManager(userId);
        
        const access_token = googleAuthInfo.accessToken;
        const refresh_token = googleAuthInfo.refreshToken;

        const data = await syncGoogleDrive(access_token,refresh_token);
        res.status(200).json({msg:data});
        return;
    }catch(error){
        res.status(400).json({msg : error});
        return;
    }
})

export const googleDataServiceRouter = router;