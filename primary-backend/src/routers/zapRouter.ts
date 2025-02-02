import { Router } from "express";
import authMiddleware from "../middleware/middleware";

const router = Router();


router.post('/create-zap',authMiddleware,async(req,res)=>{
    // create a zap
    const zapName = req.body.zapName;

})

router.get('/get-all-zaps',authMiddleware,async(req,res)=>{
    // get all zaps
})

router.post('/zap:id',async(req,res)=>{
    // particular zap 
})







export const zapRouter = router;

