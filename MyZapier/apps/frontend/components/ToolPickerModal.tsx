// import { useEffect, useState } from "react";

// interface Tool {
//   id: string;
//   name: string;
//   icon: string; // could be an image URL or emoji
//   category: string;
// }

// interface ToolPickerModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSelect: (tool: Tool) => void;
// }

// export default function ToolPickerModal({ isOpen, onClose, onSelect }: ToolPickerModalProps) {
//   const [tools, setTools] = useState<Tool[]>([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     if (isOpen) {
//       // Fetch tools from your API
//       fetch("http://localhost:5000/api/v1/action/get-avilable-actions")
//         .then(res => res.json())
//         .then(data => setTools(data))
//         .catch(console.error);
//     }
//   }, [isOpen]);

//   if (!isOpen) return null;

//   const filteredTools = tools.filter(t =>
//     t.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div className="bg-white rounded-lg shadow-lg w-[700px] max-h-[90vh] overflow-hidden">
//         {/* Header */}
//         <div className="flex justify-between items-center border-b p-4">
//           <input
//             type="text"
//             placeholder="Search apps and tools..."
//             className="border rounded px-3 py-1 w-full mr-3"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
//         </div>

//         {/* Tool List */}
//         <div className="grid grid-cols-3 gap-4 p-4 overflow-y-auto">
//           {filteredTools.map(tool => (
//             <div
//               key={tool.id}
//               onClick={() => { onSelect(tool); onClose(); }}
//               className="flex items-center gap-2 border rounded p-2 hover:bg-gray-100 cursor-pointer"
//             >
//               <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
//               <span>{tool.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import { getAvilableActions,getAvilableTriggers} from "../api/api"

interface Tool {
  id: string;
  name: string;
  icon: string;
}

interface ToolPickerModalProps {
  isOpen: boolean;
  type: "trigger" | "action";
  onClose: () => void;
  onSelect: (tool: Tool) => void;
}

export default function ToolPickerModal({ isOpen, type, onClose, onSelect }: ToolPickerModalProps) {
  const [tools, setTools] = useState<Tool[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const fetchTools = async () => {
      try {
        const url =
          type === "trigger"
            ? "http://localhost:5000/api/v1/trigger/get-avilable-triggers"
            : "http://localhost:5000/api/v1/action/get-avilable-actions";

        const res = await fetch(url);
        const data = await res.json();  
     

        const list = type === "trigger" ? data.avilableTriggers : data.avilableActions;
        
        setTools(
          list.map((t: any) => ({
            id: t.id,
            name: type === "trigger" ? t.triggerName : t.actionName,
            icon: type === "trigger" ? t.triggerIcon : t.actionIcon,
          }))
        );
      } catch (err) {
        console.error(err);
      }
    };

    fetchTools();
  }, [isOpen, type]);

  if (!isOpen) return null;

  const filtered = tools.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg w-[700px] max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4">
          <input
            type="text"
            placeholder={`Search ${type === "trigger" ? "triggers" : "actions"}...`}
            className="border rounded px-3 py-1 w-full mr-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✕
          </button>
        </div>

        {/* Tool List */}
        <div className="grid grid-cols-3 gap-4 p-4 overflow-y-auto">
          {filtered.map((tool) => (
            <div
              key={tool.id}
              onClick={() => {
                onSelect(tool);
                onClose();
              }}
              className="flex items-center gap-2 border rounded p-2 hover:bg-gray-100 cursor-pointer"
            >
              <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
