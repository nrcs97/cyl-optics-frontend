'use client'
import Dashboard from "@/components/Dashboard/Dashboard"

export default function Clients(){
    return <Dashboard title='Clientes' currentTab={'clients'}>
        <div className="flex flex-col w-[66%] h-[100%] border-r">
            <nav className="flex justify-left gap-x-[3rem]">
                <label className="text-gray-400 font-light cursor-pointer">Buscar</label>
                <label className="text-gray-400 font-light cursor-pointer">Crear nuevo cliente</label>
            </nav>
            {/* <div className="flex justify-center items-center w-[100%] h-[100%]">
                <div className="w-[400px] h-[350px] bg-gray-400 rounded-3xl" style={{background: 'linear-gradient(55deg, #e21744, #e3cc1c)'}}>

                </div>
            </div> */}
        </div>
    </Dashboard>
}