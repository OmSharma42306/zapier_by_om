import express from "express";
import { PrismaClient } from "@prisma/client";

const PORT = 3000;
const app = express();

const client = new PrismaClient();

app.post("/hooks/catch/:userId/:zapId",async (req,res)=>{
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;
    // add zapRun and add ZapRunOutbox info to database using transaction.

    await client.$transaction(async tx=>{
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