"use client";
import { ReactNode } from "react"


export const LinkButton = ({children,onClick}:{children:ReactNode,onClick:()=>void}) =>{
    return <div className="px-2 py-2 cursor-pointer flex justify-center hover:bg-slate-100 font-light text-sm rounder" onClick={onClick}>
        {children}

    </div>
}