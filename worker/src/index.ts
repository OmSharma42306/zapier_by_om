import {Kafka} from "kafkajs"
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const kafka = new Kafka({
    clientId:"zapOutBoxPattern",
    brokers:['localhost:9092']
});
const TOPIC_NAME = "zap-events"


const consumer = kafka.consumer({groupId:"main-worker"});



async function main(){
    
    
    await consumer.connect()
    await consumer.subscribe({topic:"zap-events",fromBeginning:true})
    
    await consumer.run({
            eachMessage:async ({topic,partition,message}) => {
                console.log({
                    partition,
                    offset : message.offset,
                    value : message.value.toString()
                })
            }
        })
    
    }
    

    


main();