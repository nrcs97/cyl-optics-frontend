import { FaSearch } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { FaFolderOpen } from 'react-icons/fa'
import axios from 'axios'

export default function SearchContainer(){
    const [ input, setInput ] = useState('')
    const [ search, setSearch ] = useState([])
    const [ clients, setClients ] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/clients')
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
            : clients
        setSearch(result)
    }

    return <div className='flex flex-col gap-y-[0.8rem]'>
        <div className='flex w-[330px] h-[35px] border rounded-md mb-[2rem] p-[0.3rem] pl-[0.5rem] pr-[0.5rem] shadow-md'>
            <FaSearch className='self-center' size={20} color='black'/>
            <input className='ml-[0.7rem] bg-transparent text-[16px] text-black focus:outline-none'
                value={input} onChange={(e)=> handleChange(e.target.value)} placeholder='Escribe aquí'/>
        </div>
        <div className='flex flex-col gap-y-[1rem] w-[500px] h-[400px]'>
            <div className='flex justify-between'>
                <h1 className='text-black'>Nombre y apellido</h1>
                <h1 className='text-black'>Última historia</h1>
                <h1 className='text-black'>Número de teléfono</h1>
            </div>
            <div className={`flex flex-col h-full ${search.length ? 'overflow-scroll' : ''}`}>
            {search.length ?
                <div className='flex flex-col gap-y-[0.5rem]'>
                    {search.map((client, index) => <div key={index} className='flex justify-between p-[1rem] border rounded-xl'>
                        <h1 className='w-[8rem] overflow-hidden text-black'>{client.surname + ', ' + client.name}</h1>
                        <h1 className='w-[8rem] overflow-hidden text-black'>{'Retiro 2 anteojos locos'}</h1>
                        <h1 className='w-[8rem] overflow-hidden text-black'>{client.phoneNumber}</h1>
                    </div>)}
                </div>
                : <div className='flex flex-col mt-[2rem] self-center items-center w-fit'>
                    <FaFolderOpen size={200} color="black" style={{opacity: 0.1}}/>
                    <h1 className="text-black text-[20px]" style={{opacity: 0.4}}>Ningún resultado aún.</h1>
                </div>
            }
            </div>
        </div>
    </div>
}

{/* <div className="w-[100px] h-[100px] bg-gray-400 rounded-xl" style={{background: 'linear-gradient(55deg, #e21744, #e3cc1c)'}}>
</div> */}