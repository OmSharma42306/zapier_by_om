export const SelectonButton = ({name,onClick}:{name:string;
    onClick : () => void
}) =>{
    return <div className="border border-black ">
        <button onClick={onClick}>{name}</button>
    </div>    
}