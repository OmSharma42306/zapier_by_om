import express from "express";

const PORT = 3000;
const app = express();


app.post("/hooks/",(req,res)=>{
    
})




app.listen(PORT,()=>{
    console.log("hook server is running!");
})