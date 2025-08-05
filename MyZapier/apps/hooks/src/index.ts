import express from "express";
// @ts-ignore
import {prismaClient as client} from "@repo/db/client";

const PORT = 3004;
const app = express();


app.post("/hooks/catch/:userId/:zapId",async (req,res)=>{
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const f = req.body;
    console.log("f",f);
    const body = "xx";
    
    // add zapRun and add ZapRunOutbox info to database using transaction.
    console.log("i am hit",userId,zapId,body);
    await client.$transaction(async (tx:any)=>{
        const run = await tx.zapRuns.create({
            data:{
                zapId:zapId,
                metadata:body
            }
        });

        await tx.zapRunOutbox.create({
            data:{
                zapRunId:run.id,
            }
        })

    })

    // add process to kafka.


})




app.listen(PORT,()=>{
    console.log("hook server is running!");
})