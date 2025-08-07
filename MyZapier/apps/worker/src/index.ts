// @ts-ignore
import { prismaClient as client } from "@repo/db/client";
// import {prismaClient as client } from "@repo/db/src/index";
import { Worker } from "bullmq"

import IORedis  from "ioredis"
import axios from "axios";

const connection = new IORedis({maxRetriesPerRequest:null});


const worker = new Worker('sweeper',async (job:any)=>{
    console.log("Job data",job.data);
    const zapRuns = await client.zapRuns.findFirst({where:{
        id : job.data.zapId
    }});
    console.log("pre data",zapRuns);
    
    // data format!
    // let data =    {
    //     id: '9a25be3d-1a19-41a4-a0b0-e6a7bffad15f',
    //     zapId: '95944fa1-2d1a-4195-a12e-8a74d002cec7',
    //     metadata: { type: 'Action', appName: 'Google Docs', operation: 'Append Text',text : "",documentId : "" }
    // }

    let metaDataType = zapRuns.metadata.type;
    let appName = zapRuns.metadata.appName;
    let operationType = zapRuns.metadata.operation;
    let text = zapRuns.metadata.text;
    let documentId = zapRuns.metadata.documentId;

    if(metaDataType === 'Action'){
        
        if(appName === 'Google Docs'){
            
            const response = await axios.post('http://localhost:3003/google-docs/append-text',{
                documentId,text
            });
            console.log(response.data);
        }
    }

    console.log("Action Type: ",metaDataType);
    console.log("appName Type: ",appName);
    console.log("operationType Type: ",operationType);
    console.log("text Type: ",text);
    console.log("documentId Type: ",documentId);


    
},{connection})



async function main(){
    
 
    

}
    


main();