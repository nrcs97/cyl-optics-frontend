'use client'
import Dashboard from "@/components/Dashboard/Dashboard"
import SearchContainer from '@/components/SearchBar/SearchContainer'

export default function SearchClient(){
    
    return <Dashboard title={'Buscar clientes'} returnPath={'/admin/clients'}>
        <div className="flex flex-col">
            <SearchContainer/>
        </div>
    </Dashboard>
}