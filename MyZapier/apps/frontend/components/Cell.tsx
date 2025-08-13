import React from "react";
import { Plus } from "lucide-react"; // optional icon, you can replace with a plus sign

interface ZapCellProps {
  index: number;
  title: string;
  description: string;
  isTrigger?: boolean;
  onAdd: () => void;
}

const ZapCell: React.FC<ZapCellProps> = ({ index, title, description, isTrigger,onAdd }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border border-dotted border-gray-400 rounded-lg p-4 w-80 bg-white">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-gray-100 px-2 py-0.5 rounded-md text-sm font-semibold border border-gray-300">
            {isTrigger ? "⚡ Trigger" : "⚡ Action"}
          </span>
        </div>
        <p className="font-semibold text-lg">{index}. {title}</p>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>

      {/* Connector with plus */}
      <div className="flex justify-center items-center w-full">
        <div className="h-6 w-0.5 bg-purple-500"></div>
      </div>
      <button className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-1 mt-[-6px]" onClick={onAdd}>
        <Plus size={16} />
      </button>
    </div>
  );
};

export default ZapCell;
