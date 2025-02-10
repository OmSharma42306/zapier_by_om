import { Router } from "express";
import authMiddleware from "../middleware/middleware";
import { zapCreateSchema } from "../types";
import { client } from "../db/client";
const router = Router();


router.post('/',authMiddleware,async(req:any,res:any)=>{
    // create a zap
    const id = req.userId;

    const parsedData = zapCreateSchema.safeParse(req.body);
    if(!parsedData.success){
        return res.json({msg:"Invalid Inputs!"})
    }

    await client.$transaction(async tx =>{
        const zap = await client.zap .create({
            data:{
                userId:id,
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

        await client.zap.update({
            where:{
                id:zap.id
            },
            data:{
                triggerId:trigger.id
            }
        })

    })


    // const createZap = await client.zap.create({data:{
    //     triggerId: " ",
        
    // }})
    
    res.json({msg:"done!"})

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


})







export const zapRouter = router;

