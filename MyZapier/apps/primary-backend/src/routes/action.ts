import {Request, Response, Router} from "express"
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


router.post('/add-action',async(req:Request,res:Response)=>{
    try{    
        const actionId = req.body.actionId;
        const zapId = req.body.zapId;
        const data = req.body.data;
        const index = req.body.index;
        
        console.log(actionId,zapId,data,index);
        const user = await client.action.findMany();
        console.log(user);
        const action = await client.action.create({
            data : {
                zapId : zapId,
                actionId : actionId,
                metadata : data,
                index : index
            }        
        });

        res.status(200).json({msg : "action-cratesd",action});
        return;


        
    }catch(error){
        res.status(400).json({msg : error});
        return;
    }
})

export const actionRouter = router;