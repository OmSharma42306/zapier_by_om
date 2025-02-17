import express from "express";
import cors from "cors";
import { userRouter } from "./routers/userRouter";
import { zapRouter } from "./routers/zapRouter";
import { triggerRouter } from "./routers/trigger";
import { actionRouter } from "./routers/action"
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/v1/user',userRouter);
app.use('/api/v1/zap',zapRouter);
app.use('/api/v1/trigger',triggerRouter);
app.use('/api/v1/action',actionRouter);
app.get('/',(req,res)=>{
    res.json({msg:"Hi! Welcome to Primary Backend"})
})


app.listen(PORT,()=>{
    console.log(`Primary Backend Server Started at ${PORT}`);
})