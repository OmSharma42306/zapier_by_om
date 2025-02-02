import { PrismaClient } from "@prisma/client";
import {Kafka} from "kafkajs";

const client = new PrismaClient();

const kafka = new Kafka({
    clientId:"zapOutBoxPattern",
    brokers:['localhost:9092']
});

const TOPIC_NAME = "zap-events"


async function main(){
    
    const producer = kafka.producer();
    await producer.connect();

    while(true){
        // pick things from db
        const pendingRows = await client.zapRunOutbox.findMany({where:{

        },
        take:10
        })
    
        // send things to kafka queue.
    
        producer.send({
                topic:TOPIC_NAME,
                messages: pendingRows.map(r => ({
                    value:r.zapRunId
                }))
        })
        
        
    }
}

main();