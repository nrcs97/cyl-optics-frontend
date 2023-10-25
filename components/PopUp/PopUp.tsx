'use client'
import { useState } from "react"

export default function PopUp({message} : {message : string}){
    const [show, setShow] = useState<boolean>(true)

    if (show) return <div className="absolute flex justify-center w-[100vw] h-[100vh]" 
        style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
        <div className="self-center flex flex-col
            justify-center items-center shadow bg-white rounded-xl w-[300px]
            gap-y-[0.8rem] h-[120px]">
            <h1 className="text-black select-none">{message}</h1>
            <div className="flex w-full h-fit justify-evenly">
                <button className="text-black border w-[7rem] rounded-xl select-none"
                name="logout" onClick={()=> setShow(false)}>Aceptar</button>
            </div>
        </div>
    </div>
    else return null
}