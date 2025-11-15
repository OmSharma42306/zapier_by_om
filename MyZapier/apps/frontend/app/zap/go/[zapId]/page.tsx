"use client";

import ZapCell from "@/components/ZapCell";
import {Appbar} from "@/components/Appbar";
import ZapCanvas from "@/components/ZapCanvas";
import { fetchZapState } from "@/api/api"
import { useEffect, useState } from "react";

export default function GoZapPage({ params }: { params: { zapId: string } }) {
const [zapState,setZapState] = useState<any>([]);
  useEffect(()=>{
    async function main(){
        const zapStatez = await fetchZapState(params.zapId);
        setZapState(zapStatez)
    }
    main()
    
  },[]);

  console.log("Zap State",zapState)
  if(zapState.length <= 0){
    return;
  }
  console.log("kaise rahega bhala ..",zapState?.msg[0])
  const zap = zapState?.msg[0];

  // Build array for ZapCell
  const flowCells = [
    {
      isTrigger: true,
      title: zap.trigger.triggerName,
      description: `Trigger ID: ${zap.trigger.triggerId}`,
      iconUrl: zap.trigger.iconUrl,
    },
    ...zap.action.map((a: any) => ({
      isTrigger: false,
      title: `${a.metadata.appName} - ${a.metadata.operation}`,
      description: a.metadata.text,
      iconUrl: a.iconUrl,
    })),
  ];

  console.log("fllll",flowCells)

  return (
    <div className="min-h-screen bg-gray-100 select-none">
      <Appbar />

      {/* 🚀 Entire Zap Builder is inside draggable ZapCanvas */}
      <ZapCanvas>
        <div className="flex flex-col items-center gap-10 pt-20">
          {flowCells.map((cell, i) => (
            <ZapCell
              key={i}
              index={i + 1}
              title={cell.title}
              description={cell.description}
              isTrigger={cell.isTrigger}
              iconUrl={cell.iconUrl}
              onAdd={() => console.log("Add action")}
              onSelectTool={() => console.log("Open tool popup")}
            />
          ))}
        </div>
      </ZapCanvas>
    </div>
  );
};