"use client"
import { useRouter } from "next/navigation";
import { LinkButton } from "./buttons/LinkButton";
import { PrimaryButton } from "./buttons/PrimaryButton";
const token = localStorage.getItem('token');

export const Appbar = () =>{

    const router = useRouter();
    if(!token){
        router.push('/login')
    }
    if(token){
        
        return <div className="flex border-b justify-between p-4">
            {/* <div className="flex flex-col justify-center text-2xl font-extrabold">
                Taskly
            </div> */}
              <div className="flex items-center text-2xl font-extrabold">
                    <img 
                        src="https://res.cloudinary.com/dyiovhrlr/image/upload/v1756041377/ibjz0tjggn3v7qu3drdl.png" 
                        alt="Taskly Logo" 
                        className="w-8 h-8 mr-2" 
                    />
                    Taskly
                </div>
    <div className="flex ">
        <div className="pr-4">
    <LinkButton onClick={()=>{

        localStorage.removeItem('token');
    }}>Logout</LinkButton>
    </div>
    </div>
     
        </div>
    }
    return <div className="flex border-b justify-between p-4">
    {/* <div className="flex flex-col justify-center text-2xl font-extrabold">
        Taskly
    </div> */}

    <div className="flex items-center text-2xl font-extrabold">
                    <img 
                        src="https://res.cloudinary.com/dyiovhrlr/image/upload/v1756041377/ibjz0tjggn3v7qu3drdl.png" 
                        alt="Taskly Logo" 
                        className="w-8 h-8 mr-2" 
                    />
                    Taskly
                </div>
    <div className="flex ">
        <div className="pr-4">
    <LinkButton onClick={()=>{}}>Contact Sales</LinkButton>
    </div>
    <div className="pr-4">
    <LinkButton onClick={()=>{
        router.push('/login')
    }}>Login</LinkButton>
    </div>
    
    <PrimaryButton onClick={()=>{
        router.push('/signup')
    }}>Signup</PrimaryButton>
    
    
    </div>
    </div>
}
