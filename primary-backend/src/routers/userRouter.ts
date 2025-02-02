import {Router} from "express"
import bcrypt from "bcrypt"
import {client} from "../db/client"
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/middleware";
import {signInSchema,signUpSchema} from "../types/index"

const JWT_SECRET : string | undefined = process.env.JSONWEBTOKEN;
console.log(JWT_SECRET);

const router = Router();



// signup endpoint
router.post('/signup',async(req,res)=>{
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const saltCycles = 10;
    try{    
        const {success} = signUpSchema.safeParse(req.body);
        if(!success){
            res.status(411).json({msg:"Invalid Inputs!"});
        } 
    
        const checkUser = await client.user.findMany({where:{email:email}});
        if(checkUser.length>0){
            res.status(409).json({msg:"User Already Exists!"})  // use 409 for conflicts like already existing data.
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

        res.status(200).json({msg:"Account Succesfully Created!"});


    }catch(error){
        res.status(400).json({error});
    }


})

// login endpoint
router.post('/login',async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    try{
        const {success} = signInSchema.safeParse(req.body);
        if(!success){
            res.status(411).json({msg:"Invalid Inputs!"})
        }
        const checkUser : any = await client.user.findFirst({where:{email:email}})
        if(!checkUser){
            res.status(404).json({msg:"user not exists!"});
        }

        
        const verifyPassword = await bcrypt.compare(password,checkUser?.password)
        if(!verifyPassword){
            res.status(401).json({msg:"Invalid Credentials!"})
        }

        const token = await jwt.sign(checkUser?.id,JWT_SECRET as string);


        res.status(200).json({msg:"Login Successful",token});
        

    }catch(error){
        res.status(400).json({error});
    }


})


// user service endpoint
router.post('/user',authMiddleware,async(req,res)=>{
    // after login for user services
})

export const userRouter = router;