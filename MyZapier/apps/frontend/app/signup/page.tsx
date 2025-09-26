"use client"

import { CheckFeature } from "@/components/CheckFeature";
import { Appbar } from "@/components/Appbar";
import { Input } from "@/components/Input";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { BACKEND_URL } from "../config/config";
export default function(){
    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const router = useRouter();
    console.log(name);
    console.log(email);
    console.log(password);
    async function signUp(){
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
            name,
            email,
            password
        });
        const data = await response.data;
        console.log(data);
        router.push("/login")
    }

return <div>
    <Appbar/>
    <div className="flex justify-center">

    
    <div className="flex pt-8 max-w-4xl">
<div className="flex pt-8">
        <div className="flex-1 pt-20 px-4">
            <div className="font-semibold text-3xl pb-4">
                Join millions worldwide who automate their work using Taskly.
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
            <Input label={"Name"} onChange={e=>{
                setName(e.target.value);
            }} type="text" placeholder="Your Name"/>
            <Input label={"Email"} onChange={e=>{
                setEmail(e.target.value);
            }} type="text" placeholder="Your Email"/>
            <Input label={"Password"} onChange={e=>{
                setPassword(e.target.value)
            }} type="password" placeholder="Password"/>
            <div className="pt-4">
            <PrimaryButton onClick={signUp} size="big">SignUp</PrimaryButton>
            </div>
            
        </div>

        

    </div>
    </div>
    </div>
    </div>
}