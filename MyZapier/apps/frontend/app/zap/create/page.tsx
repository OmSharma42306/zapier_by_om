'use client'

import ZapCell from "@/components/ZapCell"
import {Appbar} from "@/components/Appbar"
import { useState } from "react";
import ToolPickerModal from "@/components/ToolPickerModal";

interface CellData {
  title: string;
  description: string;
  isTrigger?: boolean;
  tool?: string;
}

export default function Home() {

    const [cells,setCells] = useState<any[]>([{
      title: "Select the event that starts your Zap",
      description: "Choose a trigger event to start automation.",
      isTrigger: true,
    },
    {
      title: "Select the event for your Zap to run",
      description: "Choose an action to perform when the trigger fires.",
    },]);

     const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [modalType, setModalType] = useState<"trigger" | "action">("action");

    function handleAddCell(position:number){
        const newCell : CellData = {
            title : "New Action",
            description : "Describe what this action should do."
        }

        const updated = [...cells];
        console.log(position)
        updated.splice(position + 1,0,newCell);
        setCells(updated)
    }
    
    const handleToolSelect = (tool: { id: string; name: string }) => {
    if (selectedIndex !== null) {
      const updated = [...cells];
      updated[selectedIndex].tool = tool.name;
      updated[selectedIndex].title = tool.name;
      setCells(updated);
    }
  };

    return (
        <>
        <div>
            <Appbar/>
        </div>
    <div className="flex flex-col items-center gap-8 p-10 bg-gray-50 min-h-screen">
            {cells.map((cell,i)=>(
                <ZapCell
                    key={i} 
                    index={i+1}
                    title={cell.title}
                    description={cell.description}
                    isTrigger={cell.isTrigger} 
                    onAdd={()=>handleAddCell(i)}
                    onSelectTool={()=>{
                        setSelectedIndex(i);
                        setModalOpen(true)
                        setModalType(cell.isTrigger ? "trigger" : "action");
                    }}
                    />
            ))}

            <ToolPickerModal
            isOpen={modalOpen}
            type={modalType}
            onClose={()=>setModalOpen(false)}
            onSelect={handleToolSelect}
            />

    </div>
    </>
  );
}

