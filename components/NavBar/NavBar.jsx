import { motion } from "framer-motion"
import Image from "next/image"
import logo_2 from '@/public/logo_2.png'
import { useState } from "react"
import { useRouter } from "next/navigation"
import React from "react"
import { Logout } from "@/helpers/session"
import { FaArrowRightFromBracket } from 'react-icons/fa6'

function NavBar(){
    const [ currentTab, setCurrentTab ] = useState('')
    const router = useRouter()

    function handleClick(event){
        const { id } = event.target
        setCurrentTab(id)
        let route = '/admin'
        if (id !== 'admin'){
            route += '/' + id
        }
        router.push(route)
    }

    return <nav className="flex flex-col items-center gap-y-[2.2rem] pt-[1rem] w-[220px] h-[100%]
        bg-gray-50 border-r shadow-lg">
        <div className="flex w-[80%] h-[80px] justify-center items-center cursor-pointer"
            onClick={handleClick}
            id='admin'>
            <Image  className="w-auto h-[70px]"
                src={logo_2} alt='logo' width={1200} height={1000}/>
        </div>
        <div className="flex flex-col gap-y-[1rem]">
            <motion.h1 className={`${currentTab === 'clients' ? 'text-black' : 'text-gray-500'}
                text-left text-[1.3rem] font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                onClick={handleClick}
                id='clients'
                >Clientes</motion.h1>
            <motion.h1 className={`${currentTab === 'orders' ? 'text-black' : 'text-gray-500'}
                text-left text-[1.3rem] font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                >Pedidos</motion.h1>
            <motion.h1 className={`${currentTab === 'bills' ? 'text-black' : 'text-gray-500'}
                text-left text-[1.3rem] font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                >Facturación</motion.h1>
            <motion.h1 className={`${currentTab === 'sales' ? 'text-black' : 'text-gray-500'}
                text-left text-[1.3rem] font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                >Ventas</motion.h1>
            <motion.h1 className={`${currentTab === 'stats' ? 'text-black' : 'text-gray-500'}
                text-left text-[1.3rem] font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                >Estadísticas</motion.h1>
            <hr/>
            <motion.h1 className={`${currentTab === 'others' ? 'text-black' : 'text-gray-500'}
                flex gap-x-[0.5rem] justify-center items-baseline text-left text-[1.3rem]
                font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                onClick={()=>{
                    Logout()
                    router.push('/')
                }}
                ><FaArrowRightFromBracket size={16}/>Logout</motion.h1>
        </div>
    </nav>
}

export default React.memo(NavBar) // memoriza el componente y solo es re-renderizado cuando cambian las props del mismo