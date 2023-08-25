'use client'
import Dashboard from "@/components/Dashboard/Dashboard"
import ClientForm from "@/components/ClientForm/ClientForm"

export default function AddClient(){
    
    return <Dashboard title={'Clientes'} returnPath={'/admin/clients'}>
        <div className="flex">
            <ClientForm fontWidth="light" fontColor="black" textColor="black"/>
            <div className="w-full h-full p-[1rem]"></div>
        </div>
    </Dashboard>
    
    {/* <div className="w-fit h-fit bg-gray-400 rounded-3xl" style={{background: 'linear-gradient(55deg, #e21744, #e3cc1c)'}}>
    </div> */}
}