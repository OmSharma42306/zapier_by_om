// @ts-ignore
import { prismaClient as client } from "@repo/db/client";
// import {prismaClient as client } from "@repo/db/src/index";
import { Worker } from "bullmq"

import IORedis  from "ioredis"

const connection = new IORedis({maxRetriesPerRequest:null});



const worker = new Worker('sweeper',async (job:any)=>{
    console.log("Job data",job.data);
},{connection})



async function main(){
    
 
    

}
    


main();