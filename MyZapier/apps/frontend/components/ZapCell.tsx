import { useState } from "react";
import ServicesModal from "./ServiceModal";
interface ZapCellProps {
  name?: string;
  index: number;
  onClick?: () => void;
}
export const ZapCell = ({
name,
index,
onClick 
}:ZapCellProps) =>{  
        const [clicked,setClicked] = useState<Boolean>(false);
        console.log("name",name)
        function handleClick(){ 
            
            setClicked(true)
            console.log("clicked!")
        }
        

    return <div onClick={handleClick} className="border border-black py-8 px-8 flex w-[300px] justify-center cursor-pointer">
        
        <div className="flex text-xl">
        
        <div className="font-bold">
            {index}.
        </div>
        <div >
            {name}
        </div>
            
        </div>
        <div className="px-5" >
            {clicked ? <ServicesModal name={name} /> :""}
        </div>
        
        

    </div>
}


