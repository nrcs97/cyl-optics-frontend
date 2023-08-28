import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import { FaFolderOpen } from 'react-icons/fa'

export default function SearchContainer(){
    const [ search, setSearch ] = useState('')

    return <div className='flex flex-col gap-y-[4rem]'>
        <div className='flex w-[330px] h-fit border rounded-md p-[0.3rem] pl-[0.5rem] pr-[0.5rem] shadow-md'>
            <FaSearch className='self-center' size={20} color='black'/>
            <input className='ml-[0.7rem] bg-transparent text-[20px] text-black focus:outline-none'
                value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='No leas'/>
        </div>

        <div className='flex flex-col self-center'>
            <FaFolderOpen size={200} color="black" style={{opacity: 0.1}}/>
            <h1 className="text-black text-" style={{opacity: 0.4}}>Ningún resultado aún.</h1>
        </div>
    </div>
}