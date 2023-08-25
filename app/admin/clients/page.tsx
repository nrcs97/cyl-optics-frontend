'use client'
import Dashboard from "@/components/Dashboard/Dashboard"
import { useRouter } from "next/navigation"

export default function Clients(){
    const router = useRouter()

    return <Dashboard title='Clientes'>
        <div className="flex flex-col w-fit h-fit shadow-lg p-[1.2rem]">
            <nav className="flex justify-left gap-x-[3rem]">
                <label className="text-white font-semibold cursor-pointer
                    p-[0.8rem] bg-blue-400 rounded">Buscar</label>
                <label className="text-white font-semibold cursor-pointer
                    p-[0.8rem] bg-blue-400 rounded"
                    onClick={()=> router.push('/admin/clients/add')}>Crear nuevo cliente</label>
            </nav>
        </div>
    </Dashboard>
}