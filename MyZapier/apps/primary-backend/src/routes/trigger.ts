import {Request, Response, Router} from "express"
import {prismaClient as client} from "@repo/db";
import authMiddleware from "../middleware/middleware";

const JWT_SECRET : string | any = process.env.JWT_SECRET;
const router = Router();


router.get('/get-avilable-triggers',async(req:any,res:any)=>{
    //const id = req.userId;

    console.log("i am g")
    try{
        const avilableTriggers = await client.avilabletriggers.findMany();
        res.status(200).json({avilableTriggers})

    }catch(error){
        res.status(400).json({error});
    }
});


router.get('/get-webhooks-data',async(req:Request,res:Response)=>{
    // const userID = req.userID

    try{
        const webHooksRecords = await client.zapRuns.findMany({ where : {} });
        return res.status(200).json({webHooksRecords});
    }catch(error){
        res.status(400).json({error});
        return;
    }

});

router.post('/add-trigger',async(req:Request,res:Response)=>{
    try{    
        const zapId = req.body.zapId;
        const triggerId = req.body.triggerId;

        const zapExists = await client.zap.findMany({
            where : {id : zapId}
        });

        if(!zapExists || zapExists.length <= 0){
            res.status(404).json({ msg : "zap not exists!"});
            return;

        }

        const addTrigger = await client.trigger.create({
            data : {
                zapId : zapId,
                triggerId : triggerId        
            }
        });
        
        res.status(200).json({ msg : "Trigger Added Successfully!"});
        return;

    }catch(error){
        res.status(400).json({ msg : error });
        return;
    }
});



export const triggerRouter =  router;