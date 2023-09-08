import { motion } from 'framer-motion'
import { FaPencil } from 'react-icons/fa6'
import { FaClipboard } from 'react-icons/fa6'
import { FaAddressCard } from 'react-icons/fa6'
import { FaCircleXmark } from 'react-icons/fa6'
import { useState } from 'react'
import getAgeFromUTCDate from './getAgeFromUTCDate'

export default function DataSheet({client, setSelectedClient}){
    client.age = getAgeFromUTCDate(client.birthDate)
    const [page, setPage] = useState('main')
    
    const button = {
        selected: {
            backgroundColor: 'blue'
        }
    }

    return <motion.div className="flex flex-col gap-y-[0.5rem] w-[380px] h-[420px] bg-gray-400
        rounded-3xl p-[1.5rem]"
    style={{background: 'linear-gradient(55deg, #e15338, #e3cc1c)'}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        <motion.div className='absolute w-fit h-fit self-end'
            onClick={()=> setSelectedClient('')}>
            <FaCircleXmark size={22}/>
        </motion.div>
        <div className='flex w-fit h-[4.5rem] overflow-hidden justify-start mb-[0.2rem] items-center'>
            <h1 className='font-extralight text-gray-900 text-[2.2rem] leading-[2.4rem]'>
                {client.name + ' ' + client.surname}</h1>
        </div>
        <div className='flex flex-col gap-y-[0.3rem] h-[60%] p-[0.3rem]'>
            { page === 'main' ? 
            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.6}}>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className='text-black text-[17px] font-light'>DNI:</h1>
                    <div className='w-[42%]'>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.idNumber}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className='text-black text-[17px] font-light'>No. de teléfono:</h1>
                    <div className='w-[42%]'>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.phoneNumber}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[0.8rem] justify-between'>
                    <h1 className='text-black text-[17px] font-light'>Edad:</h1>
                    <div className='w-[42%]'>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.age}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between items-center'>
                    <h1 className='text-black text-[17px] font-light'>Ocupación:</h1>
                    <div className='w-[42%]'>
                        <h1 className='mt-[0.4rem] h-[5rem] p-[0.2rem] text-black text-[15px] font-black min-h-[24px]
                        border-[1px] border-black'>{client.occupation}</h1>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.email === '' ? 'opacity-60' : ''}`}
                        >Email:</h1>
                    <div className={`w-[42%] ${client.email === '' ? 'opacity-30' : ''}`}>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.email}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
            </motion.div>
            : null}

            {page === 'sheet' ?
            <motion.div className='overflow-y-scroll pr-[1rem]'>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className='text-black text-[17px] font-light'>DNI:</h1>
                    <div className='w-[42%]'>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.idNumber}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className='text-black text-[17px] font-light'>No. de teléfono:</h1>
                    <div className='w-[42%]'>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.phoneNumber}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[0.8rem] justify-between'>
                    <h1 className='text-black text-[17px] font-light'>Edad:</h1>
                    <div className='w-[42%]'>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.age}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between items-center'>
                    <h1 className='text-black text-[17px] font-light'>Ocupación:</h1>
                    <div className='w-[42%]'>
                        <h1 className='mt-[0.4rem] h-[5rem] p-[0.2rem] text-black text-[15px] font-black min-h-[24px]
                        border-[1px] border-black'>{client.occupation}</h1>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.email === '' ? 'opacity-60' : ''}`}
                        >Email:</h1>
                    <div className={`w-[42%] ${client.email === '' ? 'opacity-30' : ''}`}>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.email}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.healthInsurance === '' ? 'opacity-60' : ''}`}
                    >Obra social:</h1>
                    <div className={`w-[42%] ${client.healthInsurance === '' ? 'opacity-30' : ''}`}>
                        <h1 className='text-black font-black min-h-[24px]'>{client.healthInsurance}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.neighborhood === '' ? 'opacity-60' : ''}`}
                    >Barrio:</h1>
                    <div className={`w-[42%] ${client.neighborhood === '' ? 'opacity-30' : ''}`}>
                        <h1 className='text-black font-black min-h-[24px]'>{client.neighborhood}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.cuit === '' ? 'opacity-60' : ''}`}
                    >CUIT:</h1>
                    <div className={`w-[42%] ${client.cuit === '' ? 'opacity-30' : ''}`}>
                        <h1 className='text-black font-black min-h-[24px]'>{client.cuit}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.iva === '' ? 'opacity-60' : ''}`}>IVA:</h1>
                    <div className={`w-[42%] {client.iva === '' ? 'opacity-30' : ''}`}>
                        <h1 className='text-black font-black min-h-[24px]'>{client.iva}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[0.8rem] justify-between'>
                    <h1 className='text-black text-[17px] font-light'>Fecha de nacimiento:</h1>
                    <div className='w-[42%]'>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.birthDate}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.location === '' ? 'opacity-60' : ''}`}
                        >Residencia:</h1>
                    <div className={`w-[42%] ${client.location === '' ? 'opacity-30' : ''}`}>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.location}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.address === '' ? 'opacity-60' : ''}`}
                        >Dirección:</h1>
                    <div className={`w-[42%] ${client.address === '' ? 'opacity-30' : ''}`}>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.address}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.zipCode === '' ? 'opacity-60' : ''}`}
                        >Código postal:</h1>
                    <div className={`w-[42%] ${client.zipCode === '' ? 'opacity-30' : ''}`}>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.zipCode}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.email === '' ? 'opacity-60' : ''}`}
                        >Email:</h1>
                    <div className={`w-[42%] ${client.email === '' ? 'opacity-30' : ''}`}>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.email}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
            </motion.div>
            : null }

            { page === 'history'}

        </div>
        <div className='flex justify-around'>
            <motion.label className='flex justify-center items-center gap-x-[0.4rem] p-[0.3rem]
                font-bold w-fit h-fit bg-gray-600 text-gray-200 text-[12px] rounded-xl shadow-lg
                cursor-pointer select-none'
                style={{background: 'linear-gradient(180deg, #5F5F5F, #707070)'}}
                whileTap={{scale: 0.9}}
                onClick={()=> setPage('sheet')}>
                <FaAddressCard size={12}/>FICHA</motion.label>
            <motion.label className='flex justify-center items-center gap-x-[0.4rem] p-[0.3rem]
                font-bold w-fit h-fit bg-gray-600 text-gray-200 text-[12px] rounded-xl shadow-lg
                cursor-pointer select-none'
                style={{background: 'linear-gradient(180deg, #5F5F5F, #707070)'}}
                whileTap={{scale: 0.9}}
                onClick={()=> setPage('history')}>
                <FaClipboard size={12}/>HISTORIAL</motion.label>
            <motion.label className='flex justify-center items-center gap-x-[0.4rem] p-[0.3rem]
                font-bold w-fit h-fit bg-gray-600 text-gray-200 text-[12px] rounded-xl shadow-lg
                cursor-pointer select-none'
                style={{background: 'linear-gradient(180deg, #5F5F5F, #707070)'}}
                whileTap={{scale: 0.9}}
                onClick={()=> setPage('edit')}>
                <FaPencil size={12}/>EDITAR</motion.label>
        </div>

    </motion.div>
}