'use client'
import Dashboard from "@/components/Dashboard/Dashboard"
import ClientForm from "@/components/ClientForm/ClientForm"

export default function AddClient(){
    return <Dashboard>
        <div className="flex flex-col gap-y-[0.6rem] w-[38%] h-[100%] border p-[1.2rem] shadow rounded-xl">
            <h1 className="text-[#2756A8] font-black text-[0.9rem]">Nuevo cliente</h1>
            <p className="text-black text-[0.9rem]">Completá el formulario para registrar un nuevo cliente</p>
            <div className="flex self-center pt-[1.2rem]">
                <ClientForm fontWidth="light" fontColor="black" textColor="black"/>
            </div>
        </div>
    </Dashboard>
    
    {/* <div className="w-fit h-fit bg-gray-400 rounded-3xl" style={{background: 'linear-gradient(55deg, #e21744, #e3cc1c)'}}>
    </div> */}
}