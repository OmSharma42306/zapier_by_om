// @ts-ignore
import { prismaClient as client } from "@repo/db/client";
// import {prismaClient as client } from "@repo/db/src/index";

// import { Queue } from "bullmq";

// // BullMq stuff
// const myQueue = new Queue('sweeper');

import { myQueue } from "./queue";

async function runSweeper(){
    
    while(true){
        
        // pick things from db
        const pendingRows = await client.zapRunOutbox.findMany({
            where:{},
            take : 10
        });
        console.log("Pending Rows",pendingRows);
    
        // put things to bull mq

        pendingRows.map(async (r:any)=>{
             await myQueue.add('zapProcess',{
            zapId : r.zapRunId
        })
        });
        
        
        // delete the entries in db.
        
        await client.zapRunOutbox.deleteMany({
            where:{
                id : {
                    in: pendingRows.map((tr:any)=>tr.id)
                },
                }
        });
        
        
        
    }
}

runSweeper();
export {myQueue};