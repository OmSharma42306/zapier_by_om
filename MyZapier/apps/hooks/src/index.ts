import express from "express";
// @ts-ignore
import {prismaClient as client} from "@repo/db/client";

const PORT = 3004;
const app = express();


app.post("/hooks/catch/:userId/:zapId",async (req,res)=>{
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const text = req.body.text;
    const f = req.body;
    const documentId = req.body.documentId;
    console.log("f",f);
    const body =  { "type":"Action" ,"appName":"Google Docs","operation":"Append Text","text":text,"documentId":documentId };
    
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

    


})




app.listen(PORT,()=>{
    console.log("hook server is running!");
})