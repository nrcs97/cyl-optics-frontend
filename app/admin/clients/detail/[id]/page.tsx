'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { FaPen } from 'react-icons/fa6'
import axios from "axios"
import Dashboard from '@/components/Dashboard/Dashboard'
import { motion } from "framer-motion"

export default function ClientDetail(){
    const { id } = useParams()

    const [ hoveredField, setHoveredField ] = useState<string>('0')

    interface DatosUsuario {
        name: string,
        surname: string,
        birthDate: string,
        idNumber: string,
        location: string,
        phoneNumber: string,
        email: string,
        occupation: string,
        healthInsurance: string,
        address: string,
        zipCode: string,
        neighborhood: string,
        iva: string,
        cuit: string
    }

    const [ data, setData] = useState<DatosUsuario>()

    useEffect(()=>{
        axios.get(`http://localhost:3001/clients/${id}`)
        .then(response => setData(response.data))
    }, [])

    return <Dashboard title='Editar cliente' returnPath="/admin/clients">
        { data ?
            <div className="flex flex-col gap-y-[2rem] w-[600px] h-content
                p-[2rem] shadow-lg rounded-xl bg-white">
                <div className="flex justify-between gap-x-[2rem]">
                    <h1 className="font-extralight text-gray-900 text-[2.3rem] leading-[2.4rem]">{data.name + ' ' + data.surname}</h1>
                    <h1 className="font-extralight text-gray-900 text-[1.2rem] leading-[2.4rem]">Ficha #{id}</h1>
                </div>
                <div className="grid grid-rows-auto grid-cols-1 gap-4 pr-[2.1rem]">
                    <div className="flex gap-x-[1rem]">
                        <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                            onHoverStart={()=> setHoveredField('1')}
                            onHoverEnd={()=> setHoveredField('0')}>
                            <label className='text-black text-[1rem] font-normal' htmlFor="name"
                                >Nombre
                            </label>
                            <div className="flex gap-x-[0.5rem] items-center">
                                <input className={`w-[220px] h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                    rounded bg-transparent`}
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder={data.name}
                                    maxLength={25}
                                    tabIndex={1}/>
                                <motion.div
                                    className="cursor-pointer"
                                    initial={{opacity: 0}}
                                    animate={ hoveredField === '1' ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 0.2}}
                                    whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                    <FaPen color="gray" size={14}/>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                            onHoverStart={()=> setHoveredField('2')}
                            onHoverEnd={()=> setHoveredField('0')}>
                            <label className='text-black text-[1rem] font-normal' htmlFor="surname"
                                >Apellido
                            </label>
                            <div className="flex gap-x-[0.5rem] items-center">
                                <input className={`w-[220px] h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                    rounded bg-transparent`}
                                    id="surname"
                                    name="surname"
                                    type="text"
                                    placeholder={data.surname}
                                    maxLength={25}
                                    tabIndex={1}/>
                                <motion.div
                                    className="cursor-pointer"
                                    initial={{opacity: 0}}
                                    animate={ hoveredField === '2' ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 0.2}}
                                    whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                    <FaPen color="gray" size={14}/>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex gap-x-[1rem]">
                        <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                            onHoverStart={()=> setHoveredField('3')}
                            onHoverEnd={()=> setHoveredField('0')}>
                            <label className='text-black text-[1rem] font-normal' htmlFor="birthDate"
                                >Fecha de nacimiento
                            </label>
                            <div className="flex gap-x-[0.5rem] items-center">
                                <input className={`w-[220px] h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                    rounded bg-transparent`}
                                    id="birthDate"
                                    name="birthDate"
                                    type="text"
                                    placeholder={data.birthDate}
                                    maxLength={25}
                                    tabIndex={1}/>
                                <motion.div
                                    className="cursor-pointer"
                                    initial={{opacity: 0}}
                                    animate={ hoveredField === '3' ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 0.2}}
                                    whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                    <FaPen color="gray" size={14}/>
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                            onHoverStart={()=> setHoveredField('4')}
                            onHoverEnd={()=> setHoveredField('0')}>
                            <label className='text-black text-[1rem] font-normal' htmlFor="idNumber"
                                >D.N.I.
                            </label>
                            <div className="flex gap-x-[0.5rem] items-center">
                                <input className={`w-[220px] h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                    rounded bg-transparent`}
                                    id="idNumber"
                                    name="idNumber"
                                    type="text"
                                    placeholder={data.idNumber}
                                    maxLength={25}
                                    tabIndex={1}/>
                                <motion.div
                                    className="cursor-pointer"
                                    initial={{opacity: 0}}
                                    animate={ hoveredField === '4' ? {opacity: 1} : {opacity: 0}}
                                    transition={{duration: 0.2}}
                                    whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                    <FaPen color="gray" size={14}/>
                                </motion.div>                        
                            </div>
                        </motion.div>
                    </div>
                    <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                        onHoverStart={()=> setHoveredField('5')}
                        onHoverEnd={()=> setHoveredField('0')}>
                        <label className='text-black text-[1rem] font-normal' htmlFor="location"
                            >Localidad
                        </label>
                        <div className="flex gap-x-[0.5rem] items-center">
                            <input className={`w-full h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                rounded bg-transparent`}
                                id="location"
                                name="location"
                                type="text"
                                placeholder={data.location}
                                maxLength={25}
                                tabIndex={1}/>
                            <motion.div
                                className="cursor-pointer"
                                initial={{opacity: 0}}
                                animate={ hoveredField === '5' ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.2}}
                                whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                <FaPen color="gray" size={14}/>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                        onHoverStart={()=> setHoveredField('6')}
                        onHoverEnd={()=> setHoveredField('0')}>
                        <label className='text-black text-[1rem] font-normal' htmlFor="phoneNumber"
                            >Teléfono
                        </label>
                        <div className="flex gap-x-[0.5rem] items-center">
                            <input className={`w-full h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                rounded bg-transparent`}
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                placeholder={data.phoneNumber}
                                maxLength={25}
                                tabIndex={1}/>
                            <motion.div
                                className="cursor-pointer"
                                initial={{opacity: 0}}
                                animate={ hoveredField === '6' ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.2}}
                                whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                <FaPen color="gray" size={14}/>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                        onHoverStart={()=> setHoveredField('7')}
                        onHoverEnd={()=> setHoveredField('0')}>
                        <label className='text-black text-[1rem] font-normal' htmlFor="email"
                            >Correo electrónico
                        </label>
                        <div className="flex gap-x-[0.5rem] items-center">
                            <input className={`w-full h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                rounded bg-transparent`}
                                id="email"
                                name="email"
                                type="text"
                                placeholder={data.email}
                                maxLength={25}
                                tabIndex={1}/>
                            <motion.div
                                className="cursor-pointer"
                                initial={{opacity: 0}}
                                animate={ hoveredField === '7' ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.2}}
                                whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                <FaPen color="gray" size={14}/>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                        onHoverStart={()=> setHoveredField('8')}
                        onHoverEnd={()=> setHoveredField('0')}>
                        <label className='text-black text-[1rem] font-normal' htmlFor="occupation"
                            >Ocupación
                        </label>
                        <div className="flex gap-x-[0.5rem] items-center">
                            <input className={`w-full h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                rounded bg-transparent`}
                                id="occupation"
                                name="occupation"
                                type="text"
                                placeholder={data.occupation}
                                maxLength={25}
                                tabIndex={1}/>
                            <motion.div
                                className="cursor-pointer"
                                initial={{opacity: 0}}
                                animate={ hoveredField === '8' ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.2}}
                                whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                <FaPen color="gray" size={14}/>
                            </motion.div>
                        </div>
                    </motion.div>
{/*                     
                    <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                        onHoverStart={()=> setHoveredField('9')}
                        onHoverEnd={()=> setHoveredField('0')}>
                        <label className='text-black text-[1rem] font-normal' htmlFor="healthInsurance"
                        >Obra Social</label>
                        <div className="flex gap-x-[0.5rem] items-center">
                            <input className={`w-[220px] h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                rounded bg-transparent`}
                                id="healthInsurance"
                                name="healthInsurance"
                                type="text"
                                placeholder={data.healthInsurance}
                                maxLength={25}
                                tabIndex={1}/>
                            <motion.div
                                className="cursor-pointer"
                                initial={{opacity: 0}}
                                animate={ hoveredField === '9' ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.2}}
                                whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                <FaPen color="gray" size={14}/>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                        onHoverStart={()=> setHoveredField('10')}
                        onHoverEnd={()=> setHoveredField('0')}>
                        <label className='text-black text-[1rem] font-normal' htmlFor="address"
                            >Dirección
                        </label>
                        <div className="flex gap-x-[0.5rem] items-center">
                            <input className={`w-[220px] h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                rounded bg-transparent`}
                                id="address"
                                name="address"
                                type="text"
                                placeholder={data.address}
                                maxLength={25}
                                tabIndex={1}/>
                            <motion.div
                                className="cursor-pointer"
                                initial={{opacity: 0}}
                                animate={ hoveredField === '10' ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.2}}
                                whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                <FaPen color="gray" size={14}/>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                        onHoverStart={()=> setHoveredField('11')}
                        onHoverEnd={()=> setHoveredField('0')}>
                        <label className='text-black text-[1rem] font-normal' htmlFor="zipCode"
                            >Código Postal
                        </label>
                        <div className="flex gap-x-[0.5rem] items-center">
                            <input className={`w-[220px] h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                rounded bg-transparent`}
                                id="zipCode"
                                name="zipCode"
                                type="text"
                                placeholder={data.zipCode}
                                maxLength={25}
                                tabIndex={1}/>
                            <motion.div
                                className="cursor-pointer"
                                initial={{opacity: 0}}
                                animate={ hoveredField === '11' ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.2}}
                                whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                <FaPen color="gray" size={14}/>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                        onHoverStart={()=> setHoveredField('12')}
                        onHoverEnd={()=> setHoveredField('0')}>
                        <label className='text-black text-[1rem] font-normal' htmlFor="neighborhood"
                            >Barrio
                        </label>
                        <div className="flex gap-x-[0.5rem] items-center">
                            <input className={`w-[220px] h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                rounded bg-transparent`}
                                id="neighborhood"
                                name="neighborhood"
                                type="text"
                                placeholder={data.neighborhood}
                                maxLength={25}
                                tabIndex={1}/>
                            <motion.div
                                className="cursor-pointer"
                                initial={{opacity: 0}}
                                animate={ hoveredField === '12' ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.2}}
                                whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                <FaPen color="gray" size={14}/>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                        onHoverStart={()=> setHoveredField('13')}
                        onHoverEnd={()=> setHoveredField('0')}>
                        <label className='text-black text-[1rem] font-normal' htmlFor="iva"
                            >IVA
                        </label>
                        <div className="flex gap-x-[0.5rem] items-center">
                            <input className={`w-[220px] h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                rounded bg-transparent`}
                                id="iva"
                                name="iva"
                                type="text"
                                placeholder={data.iva}
                                maxLength={25}
                                tabIndex={1}/>
                            <motion.div
                                className="cursor-pointer"
                                initial={{opacity: 0}}
                                animate={ hoveredField === '13' ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.2}}
                                whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                <FaPen color="gray" size={14}/>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div className='flex flex-col gap-y-[0.2rem] justify-start'
                        onHoverStart={()=> setHoveredField('14')}
                        onHoverEnd={()=> setHoveredField('0')}                    >
                        <label className='text-black text-[1rem] font-normal' htmlFor="cuit"
                        >CUIT</label>
                        <div className="flex gap-x-[0.5rem] items-center">
                            <input className={`w-[220px] h-[36px] text-[16px] pl-[0.3rem] border-[2px] border-gray-700 text-black text-[0.9rem]
                                rounded bg-transparent`}
                                id="cuit"
                                name="cuit"
                                type="text"
                                placeholder={data.cuit}
                                maxLength={25}
                                tabIndex={1}/>
                            <motion.div
                                className="cursor-pointer"
                                initial={{opacity: 0}}
                                animate={ hoveredField === '14' ? {opacity: 1} : {opacity: 0}}
                                transition={{duration: 0.2}}
                                whileTap={{scale: 0.9, transition: {duration: 0.05}}}>
                                <FaPen color="gray" size={14}/>
                            </motion.div>
                        </div>
                    </motion.div> */}
                </div>
            </div>
        : null }
    </Dashboard>
}