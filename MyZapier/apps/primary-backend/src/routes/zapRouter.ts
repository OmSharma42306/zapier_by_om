import { Request, Response, Router } from "express";
import authMiddleware from "../middleware/middleware";
import {zapCreateSchema} from "@repo/common"
import {prismaClient as client} from "@repo/db";
import { ZapState } from "../types/index"

interface authRequest extends Request{
    userId? : Number;
    zapId? : string;

}
const router = Router();


// router.post('/',authMiddleware,async(req:any,res:any)=>{
//     // create a zap
//     const id = req.userId;

//     const parsedData = zapCreateSchema.safeParse(req.body);
//     if(!parsedData.success){
//         return res.json({msg:"Invalid Inputs!"})
//     }

//     await client.$transaction(async (tx : any)=>{
//         const zap = await client.zap .create({
//             data:{
//                 userId:id,
//                 triggerId:"",
//                 action:{
//                     // @ts-ignore
//                     create:parsedData.data.actions.map((x:any,index:any)=>({
//                         actionId:x.avilableActionId,
//                         index:index
//                     }))
//                 }
//             }
//         })

//         const trigger = await tx.trigger.create({
//             data:{
//                 triggerId : parsedData.data.avilableTriggerId,
//                 zapId : zap.id
//             }
//         })

//         await client.zap.update({
//             where:{
//                 id:zap.id
//             },
//             data:{
//                 triggerId:trigger.id
//             }
//         })

//     })


//     // const createZap = await client.zap.create({data:{
//     //     triggerId: " ",
        
//     // }})
    
//     res.json({msg:"done!"})

// })

router.post('/create-zap',authMiddleware,async(req:authRequest , res:Response)=>{
    const userId = Number(req.userId);
    console.log("userID : ",userId)
    try{
         const parsedData = zapCreateSchema.safeParse(req.body);
        if(!parsedData.success){
            return res.json({msg:"Invalid Inputs!"})
        }
        console.log(parsedData);
        const createZap = await client.zap.create({
            data : {
                userId : userId,
                triggerId : ""
            }
        });
        console.log("createdZap",createZap);
        res.status(200).json({msg : "zapCreated",zapId : createZap.id});
        return;
    }catch(error){
        res.status(400).json({msg : error});
        return;
    }
})

router.get('/get-all-zaps',authMiddleware,async(req:any,res:any)=>{
    // get all zaps
    const id = req.userId;
    console.log("userId",id)
    const allZaps = await client.zap.findMany({where:{
        userId:id
    },
    include:{
        action:{
            include:{
                type:true
            }
        },
        trigger:{
            include:{
                type:true
            }
        }
    }
    
});


    
    console.log(allZaps)
    res.json({allZaps});
})








router.get('/fetch-zap-state',async(req:any,res : Response)=>{
    try{

        console.log("i am here x !");
        const zapId : any = req.query.zapId;
        console.log('Zap id',zapId);
        const zapState : ZapState | any= await client.zap.findMany({
            select : {trigger : true , action : true,},
            where : {id : zapId}
        });
        const trigger = zapState[0]?.trigger;
        console.log("za",zapState);
        console.log(trigger);
if( trigger.triggerId === '218e06d7-bf14-4334-9e12-a0205b209314'){
    trigger['triggerName'] = "WebHook";
};
        console.log("zapState : ",zapState);
        res.status(200).json({msg : zapState});
        return;
    }catch(error){
        res.status(400).json({msg : error});
        return;
    }
})




router.post('/add-all-actions-to-zapRuns',async(req:Request,res:Response)=>{
    try{
        // fetch all actions with zap id 
        const zapId = req.body.zapId;
        console.log("zap id at : ",zapId);
        const allActions = await client.action.findMany({
            where : {zapId : zapId}
        });

        if (allActions.length === 0){
            res.status(404).json({msg : 'No Actions Found for this ZapID'});
            return;
        }
        console.log(allActions);
        // Running a single transactions for all actions inserts.
        // insert them per entry in zapruns and zapruns outbox
        await client.$transaction(async (tx)=>{
            for(const action of allActions){
                const zapRun = await tx.zapRuns.create({
                    data : {
                        zapId : action.zapId,
                        // @ts-ignore
                        metadata : action.metadata,
                        index : action.index
                    }
                });

                await tx.zapRunOutbox.create({
                    data:{
                        zapRunId : zapRun.id
                    }
                });
            }
        })
    res.status(200).json({ msg : "All Actions Inserted into Zapruns Successfully..!"});
    return;
    }catch(error){
        res.status(400).json({msg : error});
        return;
    }
});

router.get('/:id',authMiddleware,async(req:any,res:any)=>{
    // particular zap 
    const id = req.id;
    console.log("i am here!")
    const zapId = req.params.id;
    const particularZap = await client.zap.findFirst({where:{
        userId:id,
        id:zapId
    },
include:{action:{
    include:{
        type:true
    }
},
trigger:{
    include:{
        type:true
    }
}
}})

    return res.status(200).json({particularZap});


});

export const zapRouter = router;

