import {Router} from "express"
import {prismaClient as client} from "@repo/db";

import authMiddleware from "../middleware/middleware";

const JWT_SECRET : string | any = process.env.JWT_SECRET;
const router = Router();


router.get('/get-avilable-actions',async(req:any,res:any)=>{
    console.log("oh my god actions!")
    try{
        const avilableActions = await client.avilableActions.findMany();
        res.status(200).json({avilableActions})
    }catch(error){
        res.status(400).json({error});
    }
})



export const actionRouter = router;