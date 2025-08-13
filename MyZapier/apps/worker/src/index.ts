import { prismaClient as client } from "@repo/db";
import { Worker} from "bullmq"
import IORedis  from "ioredis"
import axios from "axios";
import {appendToGoogleDocs } from "@repo/google"

const connection = new IORedis({maxRetriesPerRequest:null});


const worker = new Worker('sweeper',async (job:any)=>{
    console.log("Job data",job.data);
    
    const {zapId,index} = job.data;

    const zapRuns : any = await client.zapRuns.findFirst({
        where: {zapId,index}
    });

    const userIdOfZap : any = await client.zap.findFirst({
        select:{userId:true},
        where:{id : zapId}}
    );

     const userId = userIdOfZap.userID;
    console.log("user ID **************",userId)
    console.log("pre data",zapRuns);
    
    // data format!
//    {
//   id: '3d8b3e83-aee5-48bb-b602-b2bba9afc7b6',
//   zapId: '29dd7a7d-7fc7-4579-86b9-e475da367822',
//   metadata: {
//     text: 'Tere Bina Tere Bina Beswadi Ye duniya',
//     type: 'Action',
//     appName: 'Google Docs',
//     operation: 'Append Text',
//     documentId: '1G6sDTT57pQe4aFjukIjIJhtMnyV4JEbKFbTKPkooyc0'
//   },
//   index: 1
// }
    
    let zapRunsId = zapRuns.id;
    let metadata = zapRuns.metadata;
    let zapRunIndex = zapRuns.index;
    let metaDataType = metadata.type;
    let appName = metadata.appName;
    let operationType = metadata.operation;
    let text = metadata.text;
    let documentId = metadata.documentId;

    if(metaDataType === 'Action'){
        
        if(appName === 'Google Docs'){
            console.log('i am under the if condition******************')
            // const response = await axios.post('http://localhost:3003/google-docs/append-text',{
            //     documentId,text
            // });

            // call append text.
            await appendToGoogleDocs(userId,documentId,text);
            // console.log(response.data);
        }
    }

    console.log("Action Type: ",metaDataType);
    console.log("appName Type: ",appName);
    console.log("operationType Type: ",operationType);
    console.log("text Type: ",text);
    console.log("documentId Type: ",documentId);
    console.log("index",index);


    
},{connection})

