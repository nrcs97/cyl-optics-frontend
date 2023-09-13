import { FaSearch } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { FaFolderOpen } from 'react-icons/fa'
import axios from 'axios'
import { motion } from 'framer-motion'
import DataSheet from '@/components/DataSheet/DataSheet'

export default function SearchContainer(){
    const [ input, setInput ] = useState('')
    const [ search, setSearch ] = useState([])
    const [ clients, setClients ] = useState([])
    const [ selectedClient, setSelectedClient ] = useState(null)

    useEffect(()=>{
        axios.get('http://localhost:3001/clients/search?name&surname')
        .then(response => setClients(response.data))
    }, [])

    function handleChange(value){
        setInput(value)
        const result = value !== '' ? 
            clients.filter(client => {
                const name = client.name.slice(0, value.length)
                const surname = client.surname.slice(0, value.length)
                return name.toLowerCase() === value.toLowerCase() || 
                    surname.toLowerCase() === value.toLowerCase()
            })
            : []
        setSearch(result)
    }

    return <motion.div className='flex h-[100%] gap-x-[2rem]'
        initial={{opacity: 0}}
        animate={{opacity: 1}}>
        <div className='flex flex-col w-[450px] gap-y-[0rem]'>
            <div className='flex w-[400px] h-[35px] border rounded-md mb-[2rem] p-[0.3rem] pl-[0.5rem] pr-[0.5rem] shadow-md'>
                <FaSearch className='self-center' size={20} color='black'/>
                <input className='ml-[0.7rem] bg-transparent text-[16px] text-black focus:outline-none'
                    value={input} onChange={(e)=> handleChange(e.target.value)} placeholder='Escribe aquí'/>
            </div>
            {search.length ?
                <div className='flex flex-col border w-[400px] rounded-md shadow-md'>
                    {search.map((client, index) => <motion.div key={index} className='flex gap-x-[3rem]
                    justify-between p-[1rem] border-gray cursor-pointer bg-transparent
                    select-none rounded-[inherit]'
                    initial={{backgroundColor: 'rgba(0, 0, 0, 0)'}}
                    whileHover={{backgroundColor: '#E4E4E4'}}
                    whileTap={{scale: 0.98, transition: { duration: 0.1, type: 'easeIn'}}}
                    onClick={()=> setSelectedClient(client)}>
                        <h1 className='text-[15px] text-black'>{client.surname + ', ' + client.name}</h1>
                        <h1 className='text-[15px] text-black'>{client.id}</h1>
                    </motion.div>)}
                </div>
                : <div className='flex flex-col mt-[4rem] self-center items-center w-fit'>
                    <FaFolderOpen size={100} color="black" style={{opacity: 0.1}}/>
                    <h1 className="text-black text-[18px]" style={{opacity: 0.4}}>Ningún resultado aún.</h1>
                </div>
            }
        </div>

        { selectedClient ? 
        <div className='flex justify-start items-start max-w-550px'>
            <DataSheet client={selectedClient} setSelectedClient={setSelectedClient}/>
        </div>
        : null }
    </motion.div>
}