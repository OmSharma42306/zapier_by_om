
// @ts-ignore
import {prismaClient} from "@repo/db/client";
// import { prismaClient} from "@repo/db/src/index";
import express from "express";
import { Request,Response } from "express";

const app = express();

app.get('/r',async(req:Request,res:Response)=>{
    const user = await prismaClient.user.findMany();
    console.log(user);
});


app.listen(3000,()=>{console.log("Server Started!")});
