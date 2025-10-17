import {Request, Response, Router} from "express"
import {prismaClient as client} from "@repo/db";
import authMiddleware from "../middleware/middleware";

interface authRequest extends Request{
    userId? : Number;
}

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


router.post('/add-action',authMiddleware,async(req:authRequest,res:Response)=>{
    try{ 
        
        const userId = Number(req.userId);
        const actionId = req.body.actionId;
        const zapId = req.body.zapId;
        const data = req.body.metadata;
        const index = req.body.index;
        
        // check zap exists or not
        const zapExists = await client.zap.findFirst({
            where : {id : zapId , userId : userId}
        });
        if(!zapExists){
            return res.status(404).json({ msg : "Zap not found!"});
        }

        const action = await client.action.create({
            data : {
                zapId : zapId,
                actionId : actionId,
                metadata : data,
                index : index,
            
            },
        });

    res.status(200).json({msg : "action-added",action});
    return;        
    }catch(error){
        res.status(400).json({msg : error});
        return;
    }
})

export const actionRouter = router;