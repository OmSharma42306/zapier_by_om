import {Router} from "express"
import {client} from "../db/client"
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





export const triggerRouter =  router;