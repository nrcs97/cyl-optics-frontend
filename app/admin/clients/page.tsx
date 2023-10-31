'use client'
import { useRouter } from "next/navigation"

export default function Clients(){
    const router = useRouter()

    return <div className="flex flex-col w-fit h-fit shadow-lg p-[1.2rem]">
        <div className="flex justify-left gap-x-[1rem]">
            <label className="text-gray-500 text-[18px] font-light cursor-pointer
                p-[0.2rem] border-b-[1px]"
                onClick={()=> router.push('/admin/clients/search')}>Buscar</label>
            <label className="text-gray-500 text-[18px] font-light cursor-pointer
                p-[0.2rem] border-b-[1px]"
                onClick={()=> router.push('/admin/clients/add')}>Crear nuevo cliente</label>
        </div>
    </div>
}