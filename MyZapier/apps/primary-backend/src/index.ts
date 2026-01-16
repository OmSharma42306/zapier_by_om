import express from "express";
import cors from "cors";
import { globalRateLimiter } from "./middleware/ratelimit";
import { userRouter } from "./routes/userRouter";
import { zapRouter } from "./routes/zapRouter";
import { triggerRouter } from "./routes/trigger";
import { actionRouter } from "./routes/action"
import { googleDataServiceRouter } from "./routes/google-data-service"
import helmet from "helmet";
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json({limit : "10kb"}));
app.use(globalRateLimiter);
app.use(helmet());

app.use('/api/v1/user',userRouter);
app.use('/api/v1/zap',zapRouter);
app.use('/api/v1/trigger',triggerRouter);
app.use('/api/v1/action',actionRouter);
app.use('/api/v1/googleData',googleDataServiceRouter)
app.get('/',(req,res)=>{
    res.json({msg:"Hi! Welcome to Primary Backend"})
})


app.listen(PORT,()=>{
    console.log(`Primary Backend Server Started at ${PORT}`);
})