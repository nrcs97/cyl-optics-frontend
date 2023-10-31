'use client'
import NavBar from '@/components/NavBar/NavBar'
import React from 'react'
import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { notFound } from "next/navigation"
import { getAuthorization } from '@/helpers/getAuthorization'
import { motion } from 'framer-motion'
import { FaArrowTurnUp } from 'react-icons/fa6'
import { getReturnPath } from '@/helpers/getReturnPath'

export default function DashboardLayout({children} :
    {children: React.ReactNode}){
    const pathname = usePathname()
    const returnPath = getReturnPath(pathname)
        
    const router = useRouter()
    const [ show, setShow ] = useState(false)
    const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        getAuthorization().then(auth => {            
            if (!auth.refreshToken) setRedirect(true)
            else setShow(true)            
        })
    }, [show, pathname])

    if (redirect) notFound()
    if (!show) return <></>

    else return <main className="flex h-full overflow-y-scroll">
        <NavBar/>
        <motion.div className="flex justify-center items-center
        gap-x-[0.2rem] border-[1px] border-gray-300 shadow-md
        rounded-xl bg-black text-white text-[0.6rem] p-[0.2rem]
        font-semibold pl-[0.5rem] pr-[0.5rem] cursor-pointer
        h-[24px] w-auto self-end absolute top-4 right-10"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        onClick={()=> router.push('/')}>
            <h1>Ir al sitio</h1>
            <FaArrowTurnUp size={10}/>
        </motion.div>
        <div className='flex flex-col gap-y-[0.8rem] pl-[3rem] pr-[3rem]
        pt-[1.5rem] pb-[3rem]'>
            <div className='flex w-full h-auto'>
                {returnPath !== '/' ?
                    <label className="text-black text-[1.2rem] font-light cursor-pointer"
                    onClick={()=> router.push(returnPath)}>« Atrás</label>
                    : null
                }
            </div>
            {children}
        </div>
    </main>
}