'use client'

import ZapCell from "@/components/ZapCell"
import {Appbar} from "@/components/Appbar"
import { useState } from "react";
import ToolPickerModal from "@/components/ToolPickerModal";
import SetupModal from "@/components/SetupModal";
import { useParams } from "next/navigation";
import { saveAllActionsToZapRunsDBTable } from "@/api/api"

interface CellData {
  title: string;
  description: string;
  isTrigger?: boolean;
  tool?: string;
  iconUrl?: string;
}
interface ToolsData{
  id: string;
  name: string;
  icon : string;
}
export default function Home() {
    
    // getting zapID
    const { zapId } : any = useParams();
    console.log("current ZapID",zapId);
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
  // adding state for setup a tool ex : webhook or gmail 
  const [ setupOpen,setSetUpOpen] = useState(false);
  const [setupTool,setSetUpTool] = useState<ToolsData | null>(null);
  

  console.log(setupTool)


  const actionId = setupTool?.id;
  const actionName = setupTool?.name;
console.log("actionID",actionId);
console.log("Action Name",actionName);
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
    
    const handleToolSelect = (tool: { id: string; name: string, icon : string }) => {
    if (selectedIndex !== null) {
      const updated = [...cells];
      updated[selectedIndex].tool = tool.name;
      updated[selectedIndex].title = tool.name;
      updated[selectedIndex].iconUrl = tool.icon;
      setCells(updated);

      // open setup modal
      setSetUpTool(tool);
      setSetUpOpen(true);
    }
  };
    const handleProcessToAddAllActions = async () => {
      const response = await saveAllActionsToZapRunsDBTable(zapId);
      console.log(response);
      alert(response.msg);
    }

    return (
        <>
        <div>
            <Appbar/>
        </div>
    <div className="flex flex-col items-center gap-8 p-10 bg-gray-50 min-h-screen">
            {cells.map((cell,i)=>(
                <>
                <ZapCell
                
                    key={i} 
                    index={i}
                    title={cell.title}
                    description={cell.description}
                    isTrigger={cell.isTrigger} 
                    onAdd={()=>{
                      // if(i == 1){
                      //   handleAddCell(i+2)
                      // }
                      handleAddCell(i)
                    }
                      
                      }
                    onSelectTool={()=>{
                        setSelectedIndex(i);
                        setModalOpen(true)
                        setModalType(cell.isTrigger ? "trigger" : "action");
                    }}
                    iconUrl={cell.iconUrl}
                    />
                    <h1>{i}</h1>
                    </>
                    
            ))}

            <ToolPickerModal
            isOpen={modalOpen}
            type={modalType}
            onClose={()=>setModalOpen(false)}
            onSelect={handleToolSelect}
            />


            {/* Setup Modal (step 2: configure chosen tool) */}
        <SetupModal
          
          isOpen={setupOpen}
          tool={setupTool}
          cellIndex={selectedIndex}
          zapId = {zapId}
          onClose={() => setSetUpOpen(false)}
          onSave={(config) => {
            if (selectedIndex !== null) {
              const updated = [...cells];
              updated[selectedIndex].config = config; // store setup config inside cell
              setCells(updated);
            }
          }}
        />

    </div>

    <button onClick={handleProcessToAddAllActions}>Proceed</button>
    </>
  );
}

