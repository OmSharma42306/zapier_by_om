import express from "express";

const PORT = 3000;
const app = express();


app.post("/hooks/catch/:userId/:zapId",(req,res)=>{
    const userId = req.params.userId;
    const zapId = req.params.zapId;
})




app.listen(PORT,()=>{
    console.log("hook server is running!");
})