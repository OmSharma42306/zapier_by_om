"use client"

import { CheckFeature } from "@/components/CheckFeature";
import { Appbar } from "@/components/Appbar";
import { Input } from "@/components/Input";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { useReducer, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config/config";
import { useRouter } from "next/navigation";
export default function(){
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const router = useRouter()
    async function login(){
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/login`,{
            email,
            password
        });
        const data = await response.data;
        console.log(data)
        localStorage.setItem("token",data.token)

        router.push("/dashboard")
    }

return <div>
    <Appbar/>
    <div className="flex justify-center">

    
    <div className="flex pt-8 max-w-4xl">
<div className="flex pt-8">
        <div className="flex-1 pt-20 px-4">
            <div className="font-semibold text-3xl pb-4">
                Join millions worldwide who automate their work using Zapier.
            </div>
            <div className="pb-6 pt-4">
            <CheckFeature label={"Easy Setup, No Coding Required!"}/>
            </div>
            <div className="pb-6 ">
            <CheckFeature label={"free forever for core-features"}/>
            </div>
            <CheckFeature label={"14-day trial of Premium features & apps"}/>

        </div>

        <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded">
            <Input label={"Email"} onChange={e=>{
                setEmail(e.target.value);
            }} type="text" placeholder="Your Email"/>
            <Input label={"Password"} onChange={e=>{
                setPassword(e.target.value);
            }} type="password" placeholder="Password"/>
            <div className="pt-4">
            <PrimaryButton onClick={login} size="big">Login</PrimaryButton>
            </div>
            
        </div>

        

    </div>
    </div>
    </div>
    </div>
}