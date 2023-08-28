'use client'
import Dashboard from "@/components/Dashboard/Dashboard"
import SearchContainer from '@/components/SearchBar/SearchContainer'

export default function SearchClient(){
    
    return <Dashboard title={'Buscar clientes'} returnPath={'/admin/clients'}>
        <div className="flex flex-col">
            <SearchContainer/>
        </div>
    </Dashboard>
    
    {/* <div className="w-fit h-fit bg-gray-400 rounded-3xl" style={{background: 'linear-gradient(55deg, #e21744, #e3cc1c)'}}>
    </div> */}
}