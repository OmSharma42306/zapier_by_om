import {Router} from "express"
import bcrypt from "bcrypt"
import {client} from "../db/client"
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/middleware";
import {signInSchema,signUpSchema} from "../types/index"
// import dotenv from "dotenv"

// dotenv.config();

const JWT_SECRET : string | any = process.env.JWT_SECRET;
console.log(JWT_SECRET);

const router = Router();

// interface for req.id
interface AuthRequest extends Request{
    userId? : string;
}

// signup endpoint
router.post('/signup',async(req:any,res:any)=>{
    console.log("i am here at signup")
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const saltCycles = 10;
    console.log(email)
    console.log(password)
    console.log(name)
    try{    
        const {success} = signUpSchema.safeParse(req.body);
        if(!success){
           return res.status(411).json({msg:"Invalid Inputs!"});
        } 
    
        const checkUser = await client.user.findMany({where:{email:email}});
        if(checkUser.length>0){
            return res.status(409).json({msg:"User Already Exists!"})  // use 409 for conflicts like already existing data.
        }
        
        const salt = await bcrypt.genSalt(saltCycles);
        const hashPassword = await bcrypt.hash(password,salt);

        await client.user.create({
            data:{
                name:name,
                email:email,
                password:hashPassword
            }
        });

        // await sendEmail();

        return res.status(200).json({msg:"Account Succesfully Created!"});


    }catch(error){
        res.status(400).json({error});
    }


})

// login endpoint
router.post('/login',async(req:any,res:any)=>{
    const email = req.body.email;
    const password = req.body.password;

    try{
        const {success} = signInSchema.safeParse(req.body);
        if(!success){
            return res.status(411).json({msg:"Invalid Inputs!"})
        }
        const checkUser : any = await client.user.findFirst({where:{email:email}})
        if(!checkUser){
            return res.status(404).json({msg:"user not exists!"});
        }

        
        const verifyPassword = await bcrypt.compare(password,checkUser?.password)
        if(!verifyPassword){
            return res.status(401).json({msg:"Invalid Credentials!"})
        }

        const token = await jwt.sign({id:checkUser?.id},JWT_SECRET as string);


        return res.status(200).json({msg:"Login Successful",token});
        

    }catch(error){
        return res.status(400).json({error});
    }


})


// user service endpoint
router.get('/users',authMiddleware,async(req:AuthRequest | any,res:Response | any)=>{
    // after login for user services
    
    
    const id = req.userId;
    try{
        const getUserDetails = await client.user.findFirst({where:{id:id},select:{
            name:true,
            email:true
        }});

        return res.json({getUserDetails});

    }catch(error){

    }

})

export const userRouter = router;