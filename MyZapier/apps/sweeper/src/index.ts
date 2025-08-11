// @ts-ignore
import { prismaClient as client } from "@repo/db/client";
// import {prismaClient as client } from "@repo/db/src/index";
import { myQueue } from "./queue";


async function runSweeper(){
    
    while(true){
        
        // pick things from db
        const pendingRows = await client.zapRunOutbox.findMany({
            where:{},
            take : 10,
            orderBy:{
                zapRun:{index:'asc'}
            },
            include:{zapRun:true}
        });
        console.log("Pending Rows",pendingRows);
    
        // put things to bull mq

        pendingRows.map(async (r:any)=>{
             await myQueue.add('zapProcess',{
            zapRunId : r.zapRunId,
            zapId : r.zapRun.zapId,
            index : r.zapRun.index
        });
        });
        
        /*
        {
    id: '13fce27a-81e0-4105-a43e-8b4d81553232',
    zapRunId: '984b4993-0931-4f26-953c-2dbf9ad00c2a',
    zapRun: {
      id: '984b4993-0931-4f26-953c-2dbf9ad00c2a',
      zapId: '29dd7a7d-7fc7-4579-86b9-e475da367822',
      metadata: [Object],
      index: 2
    }
  },    
        */

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
