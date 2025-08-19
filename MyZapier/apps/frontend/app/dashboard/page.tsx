"use client"
import { Appbar } from "@/components/Appbar";
import { DarkButton } from "@/components/buttons/DarkButton";
import { LinkButton } from "@/components/buttons/LinkButton";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Zap{
    id : string;
    triggerId : string;
    userId : number;
    action:{
        id : string;
        zapId : string;
        actionId : string;
        sortingOrder : number;
        type:{
            id : string;
            actionName : string;
        }
    }[],
    trigger: {
        id: string;
        zapId: string,
        triggerId: string,
        type: {
          id: string;
          triggerName: string;
        }

}
}



// custom hook for fetching exising zaps

function useZaps(){
    const [loading,setLoading] = useState<boolean>(true);
    const [zaps,setZaps] = useState<Zap[]>([]);

    useEffect(()=>{
        async function main(){
            const response = await axios.get('http://localhost:5000/api/v1/zap/get-all-zaps',{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
            });
            console.log(response);
            const data = await response.data;
            const token = localStorage.getItem("token")
            console.log("tojen",token);
            console.log(data);
            console.log(data.allZaps);
            setZaps(data.allZaps)
            setLoading(false);
        }
        main();
    },[]);

    return {
        loading,
        zaps

    }
}



export default function(){

    const {loading,zaps} = useZaps();
    const router = useRouter();
    const [modal,setModal] = useState(false);
    
    return <div>
        <Appbar/>
        <div className="flex justify-center pt-8">
            
        <div className="max-w-screen-lg w-full">
            <div className="flex justify-between pr-8">
                <div className="text-2xl font-bold">
                    My Zaps
                </div>

                <DarkButton onClick={()=>{
                    router.push("/zap/create")
                }}>Create</DarkButton>
                 
            </div>
        </div> 
        
        
        </div>
        {
        loading ? "Loading...":<div className="flex justify-center"><ZapTable zaps={zaps}/></div>
         }
         
    </div>
}

function ZapTable({zaps}:{zaps:Zap[]}){
    const router = useRouter();
    return <div className="p-8 max-w-screen-lg w-full">
        <div className="flex">
        <div className="flex-1">Name</div>
        <div className="flex-1">Last Edit</div>
        <div className="flex-1">Running</div>
        <div className="flex-1">Go</div>

     </div>
    {zaps.map((z:any) => <div className="flex border-b border-t py-4">
    
      
        <div className="flex-1">{z.trigger.type.triggerName} {z.action.map((x:any) => x.type.actionName + " ")}</div>
        <div className="flex-1">{z.id}</div>
        <div className="flex-1">Nov 13, 2023</div>
        <div className="flex-1"><LinkButton onClick={()=>{
        router.push(`/zap/${z.id}`)
        }}>Go</LinkButton></div>
    

        
    </div>)}
</div>
}