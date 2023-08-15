'use client'
import Dashboard from "@/components/Dashboard/Dashboard"
import ClientForm from "@/components/ClientForm/ClientForm"
import { useRouter } from "next/navigation"

export default function AddClient(){
    const router = useRouter()
    
    return <Dashboard>
        <label className="text-black font-light underline cursor-pointer" onClick={()=> router.back()}>Atras</label>
        <div className="flex">
            <div className="flex flex-col gap-y-[0.6rem] w-[385px] h-[480px] border p-[1.2rem] shadow rounded-xl">
                <h1 className="text-[#2756A8] font-black text-[0.9rem]">Nuevo cliente</h1>
                <p className="text-black text-[0.9rem]">Completá el formulario para registrar un nuevo cliente</p>
                <ClientForm fontWidth="light" fontColor="black" textColor="black"/>
            </div>
            <div className="w-full h-full p-[1rem]"></div>
        </div>
    </Dashboard>
    
    {/* <div className="w-fit h-fit bg-gray-400 rounded-3xl" style={{background: 'linear-gradient(55deg, #e21744, #e3cc1c)'}}>
    </div> */}
}