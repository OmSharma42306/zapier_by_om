import { Router } from "express";
import authMiddleware from "../middleware/middleware";
import { zapCreateSchema } from "../types";
import { client } from "../db/client";
const router = Router();


router.post('/create-zap',authMiddleware,async(req:any,res:any)=>{
    // create a zap
    const parsedData = zapCreateSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.json({msg:"Invalid Inputs!"})
    }

    await client.$transaction(async tx =>{
        const zap = await client.zap.create({
            data:{
                userId:1,
                triggerId:"",
                action:{
                    create:parsedData.data.actions.map((x,index)=>({
                        actionId:x.avilableActionId,
                        sortingOrder:index
                    }))
                }
            }
        })

        const trigger = await tx.trigger.create({
            data:{
                triggerId : parsedData.data.avilableTriggerId,
                zapId : zap.id
            }
        })

    })


    // const createZap = await client.zap.create({data:{
    //     triggerId: " ",
        
    // }})
    


})

router.get('/get-all-zaps',authMiddleware,async(req,res)=>{
    // get all zaps
})

router.post('/zap:id',async(req,res)=>{
    // particular zap 
})







export const zapRouter = router;

