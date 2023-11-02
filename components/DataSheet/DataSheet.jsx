import { motion } from 'framer-motion'
import { FaClipboard } from 'react-icons/fa6'
import { FaAddressCard } from 'react-icons/fa6'
import { FaCircleArrowUp } from 'react-icons/fa6'
import { FaCircleXmark } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { getCookie } from '@/helpers/cookies'
import { useRouter } from 'next/navigation'
import getAgeFromUTCDate from './getAgeFromUTCDate'

export default function DataSheet({id, setSelectedClientId}){
    const [page, setPage] = useState('main')
    const router = useRouter()
    const [client, setClient] = useState({})
    
    useEffect(()=>{
        const token = JSON.parse(getCookie('cyl_user'))
        axios.get(`http://localhost:3001/clients/${id}`,{
            headers: {
                'Authorization': `Bearer ${token.accessToken}`
            }
        })
        .then(response => {
            const age = getAgeFromUTCDate(client.birthDate)
            setClient({...response.data, age: age})
        })
        .catch(err => alert(err.response.data))
    }, [])

    const button = {
        selected: {
            background: 'linear-gradient(180deg, #FAFAFA, #FAFAFA)',
            color: '#707070'
        },
        unselected: {
            background: 'linear-gradient(180deg, #5F5F5F, #707070)',
            color: '#FAFAFA'
        }
    }

    const sheet = {
        expanded: {
            opacity: 1,
            width: '550px'
        },
        normal: {
            opacity: 1,
            width: '380px'
        }
    }

    return <motion.div className="flex flex-col gap-y-[0.5rem] w-[380px] h-[420px] bg-gray-400
        rounded-3xl p-[1.5rem]"
    style={{background: 'linear-gradient(55deg, #e15338, #e3cc1c)'}}
    variants={sheet}
    initial={{opacity: 0}}
    animate={page === 'sheet' ? 'expanded' : 'normal'}
    exit={{opacity: 0}}
    transition={{duration: 0.6}}>
        <motion.div className='flex absolute w-fit h-fit self-end'>
            <FaCircleXmark className='cursor-pointer' size={20}
                onClick={()=> setSelectedClientId('')}/>
        </motion.div>
        <div className='flex w-fit h-[4.5rem] overflow-hidden justify-start mb-[0.2rem] items-center'>
            <h1 className='font-extralight text-gray-900 text-[2.2rem] leading-[2.4rem]'>
                {client.name + ' ' + client.surname}</h1>
        </div>
        <div className='flex flex-col gap-y-[0.3rem] h-[60%] p-[0.3rem]'>

            { page === 'main' ? 
            <motion.div className='flex flex-col gap-y-[0.5rem]'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{delay: 0.3}}>
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
                        <h1 className='mt-[0.4rem] h-[5rem] p-[0.2rem] text-black text-[12px] font-black min-h-[24px]
                        border-[1px] border-black overflow-hidden'>{client.occupation}</h1>
                    </div>
                </div>
            </motion.div>
            : null}

            {page === 'sheet' ?
            <motion.div className='flex flex-col gap-y-[0.5rem] overflow-y-scroll overflow-x-hidden p-[2rem] pt-[0rem]'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{delay: 0.6}}>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className='text-black text-[17px] font-light'>DNI:</h1>
                    <div className='w-[50%]'>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.idNumber}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className='text-black text-[17px] font-light'>No. de teléfono:</h1>
                    <div className='w-[50%]'>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.phoneNumber}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[0.8rem] justify-between'>
                    <h1 className='text-black text-[17px] font-light'>Edad:</h1>
                    <div className='w-[50%]'>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.age}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between items-center'>
                    <h1 className='text-black text-[17px] font-light'>Ocupación:</h1>
                    <div className='w-[50%]'>
                        <h1 className='overflow-hidden mt-[0.4rem] h-[5rem] p-[0.2rem] text-black text-[14px] font-black min-h-[24px]
                        border-[1px] border-black'>{client.occupation}</h1>
                    </div>
                </div>
                <div className='flex gap-x-[0.8rem] justify-between'>
                    <h1 className='text-black text-[17px] font-light'>Fecha de nacimiento:</h1>
                    <div className='w-[50%]'>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.birthDate}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.email === '' ? 'opacity-50' : ''}`}
                        >Email:</h1>
                    <div className={`w-[50%] ${client.email === '' ? 'opacity-20' : ''}`}>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.email}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.healthInsurance === '' ? 'opacity-50' : ''}`}
                    >Obra social:</h1>
                    <div className={`w-[50%] ${client.healthInsurance === '' ? 'opacity-20' : ''}`}>
                        <h1 className='text-black font-black min-h-[24px]'>{client.healthInsurance}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.neighborhood === '' ? 'opacity-50' : ''}`}
                    >Barrio:</h1>
                    <div className={`w-[50%] ${client.neighborhood === '' ? 'opacity-20' : ''}`}>
                        <h1 className='text-black font-black min-h-[24px]'>{client.neighborhood}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.cuit === '' ? 'opacity-50' : ''}`}
                    >CUIT:</h1>
                    <div className={`w-[50%] ${client.cuit === '' ? 'opacity-20' : ''}`}>
                        <h1 className='text-black font-black min-h-[24px]'>{client.cuit}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.iva === '' ? 'opacity-50' : ''}`}>IVA:</h1>
                    <div className={`w-[50%] ${client.iva === '' ? 'opacity-20' : ''}`}>
                        <h1 className='text-black font-black min-h-[24px]'>{client.iva}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.location === '' ? 'opacity-50' : ''}`}
                        >Residencia:</h1>
                    <div className={`w-[50%] ${client.location === '' ? 'opacity-20' : ''}`}>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.location}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.address === '' ? 'opacity-50' : ''}`}
                        >Dirección:</h1>
                    <div className={`w-[50%] ${client.address === '' ? 'opacity-20' : ''}`}>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.address}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
                <div className='flex gap-x-[1rem] justify-between'>
                    <h1 className={`text-black text-[17px] font-light ${client.zipCode === '' ? 'opacity-50' : ''}`}
                        >Código postal:</h1>
                    <div className={`w-[50%] ${client.zipCode === '' ? 'opacity-20' : ''}`}>
                        <h1 className='text-black text-center font-black min-h-[24px]'>{client.zipCode}</h1>
                        <hr className='border-black'/>
                    </div>
                </div>
            </motion.div>
            : null }

            { page === 'history'}

        </div>
        <div className='flex justify-around'>
            <motion.label className='flex justify-center items-center gap-x-[0.4rem] p-[0.3rem]
                font-semibold w-fit h-fit text-gray-800 text-[12px] rounded-xl shadow-lg
                cursor-pointer select-none'
                style={{background: 'linear-gradient(180deg, #FAFAFA, #CFCFCF)'}}
                whileTap={{scale: 0.9}}
                whileHover={{filter: 'brightness(1.15)'}}
                onClick={()=> router.push(`/admin/clients/detail/${client.id}`)}>
                <FaCircleArrowUp className='cursor-pointer' size={12}/>IR AL DETALLE</motion.label>
            <motion.label className='flex justify-center items-center gap-x-[0.4rem] p-[0.3rem]
                font-semibold w-fit h-fit bg-gray-600 text-gray-200 text-[12px] rounded-xl shadow-lg
                cursor-pointer select-none'
                variants={button}
                animate={page === 'sheet' ? 'selected' : 'unselected'}
                transition={{duration: 0.2}}
                style={{background: 'linear-gradient(180deg, #5F5F5F, #707070)'}}
                whileTap={{scale: 0.9}}
                whileHover={{filter: 'brightness(1.15)'}}
                onClick={()=> setPage(page !== 'sheet' ? 'sheet' : 'main')}>
                <FaAddressCard size={12}/>FICHA</motion.label>
            <motion.label className='flex justify-center items-center gap-x-[0.4rem] p-[0.3rem]
                font-semibold w-fit h-fit bg-gray-600 text-gray-200 text-[12px] rounded-xl shadow-lg
                cursor-pointer select-none'
                variants={button}
                animate={page === 'history' ? 'selected' : 'unselected'}
                style={{background: 'linear-gradient(180deg, #5F5F5F, #707070)'}}
                whileTap={{scale: 0.9}}
                whileHover={{filter: 'brightness(1.15)'}}
                onClick={()=> setPage(page !== 'history' ? 'history' : 'main')}>
                <FaClipboard size={12}/>HISTORIAL</motion.label>
        </div>
    </motion.div>
}