import { PrismaClient } from "@prisma/client";
import {Kafka} from "kafkajs";
import { Queue } from "bullmq";

const client = new PrismaClient();


// BullMq stuff
const myQueue = new Queue('sweeper');


// const kafka = new Kafka({
//     clientId:"zapOutBoxPattern",
//     brokers:['localhost:9092']
// });

// const TOPIC_NAME = "zap-events"


async function main(){
    
    // const producer = kafka.producer();
    // await producer.connect();

    while(true){
        // pick things from db
        const pendingRows = await client.zapRunOutbox.findMany({where:{
            id : "10d7f403-1fe6-4a04-807a-798439ededa3"
        },
        take:10
        })
        console.log("Pending Rows",pendingRows);
        // send things to kafka queue.
    
        // producer.send({
        //         topic:TOPIC_NAME,
        //         messages: pendingRows.map(r => ({
        //             value:r.zapRunId
        //         }))
        // })


        // send things to bull mq

        pendingRows.map(async (r:any)=>{
             await myQueue.add('zapProcess',{
            zapId : r.zapRunId
        })
        });
        // await myQueue.add('zapProcess',{
            
        // })
        
        
    }
}

main();