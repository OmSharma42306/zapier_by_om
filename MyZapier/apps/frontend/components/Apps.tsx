"use client"

import { useEffect, useState } from "react"
import {getAvilableActions,getAvilableTriggers } from "@/api/api"
export default function Apps(){
    const [avilableTriggers,setAvilableTriggers] = useState<any[]>([]);
    const [avilableActions,setAvilableActions] = useState<any[]>([]);
    useEffect(()=>{
        async function run(){
            const avilableResponseTriggers = await getAvilableTriggers();
            const avilableActionsResponse = await getAvilableActions();
            setAvilableTriggers(avilableResponseTriggers.data);
            setAvilableActions(avilableActionsResponse.data);
        }   
        run();
    },[])
    return <div>
        <h1>Actions List</h1>
        {
            avilableActions && avilableActions.length > 0 ? avilableActions.map((actions:any)=>{
                return <p>{actions}</p>
            })  : ""
        }
    </div>
}