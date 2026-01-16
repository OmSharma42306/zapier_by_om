import { prismaClient as client } from "@repo/db";
import { Worker} from "bullmq"
import IORedis  from "ioredis"
import { GOOGLE_DOCS, GMAIL } from "@repo/google"
import { myQueue } from "@repo/queue";

const connection = new IORedis({maxRetriesPerRequest:null});
const { GOOGLE_DOCS_ACTIONS } = GOOGLE_DOCS;
const { GOOGLE_GMAIL_ACTIONS } = GMAIL;

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
    
    const userId = userIdOfZap.userId;
    console.log("user ID **************",userId)
    console.log("pre data",zapRuns);
    
    let zapRunsId = zapRuns.id;
    let metadata = zapRuns.metadata;
    let zapRunIndex = zapRuns.index;
    let metaDataType = metadata.type;
    let appName = metadata.appName;
    let operationType = metadata.operation;
    

    if(metaDataType === 'Action'){
        
        if(appName === 'Google Docs'){
            // call append text.
            let text = metadata.text;
            let documentId = metadata.documentId;
            await GOOGLE_DOCS_ACTIONS.appendToGoogleDocs(userId,documentId,text);

        }else if(appName === 'Gmail'){
            if(operationType === 'Send Email'){
                const to =  metadata.to;
                const subject = metadata.subject;
                const body = metadata.body;
                const addSignature = metadata.addSignature;
                const labelId = metadata.labelId;

                await GOOGLE_GMAIL_ACTIONS.sendEmail(userId,{to,subject,body,addSignature,labelId});
                
                
            }
        }
    }

    console.log("Action Type: ",metaDataType);
    console.log("appName Type: ",appName);
    console.log("operationType Type: ",operationType);
    console.log("index",index);

    // write next index fetch and put into queue....
    const outboxEntry = await client.zapRunOutbox.findMany({
        where : {
            zapRun : {
                index : index + 1, 
            }
        },
        take : 1, 
        orderBy : {
            zapRun : {index : "asc"},
        },
        include : {zapRun : true},
    });

    console.log("outbox entry,", outboxEntry);
    console.log("**** Putting into Queue ***** ");
    await myQueue.add("zapProcess",{
         zapRunId: outboxEntry[0].zapRunId,
        zapId: outboxEntry[0].zapRun.zapId,
        index: outboxEntry[0].zapRun.index,
    });
    console.log("**** finally put into Queue ***** ");

    await client.zapRunOutbox.deleteMany({
        where : {
            id : {
                in : outboxEntry.map((r)=>r.id),
            }
        }
    });
    
    console.log("deleted entry from outbox table ....");        
},{connection})

