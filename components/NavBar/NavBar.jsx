import { motion } from "framer-motion"
import Image from "next/image"
import logo_2 from '@/public/logo_2.png'
import { useRouter, usePathname } from "next/navigation"
import React from "react"
import { useState } from "react"

function NavBar(){
    const router = useRouter()
    const pathname = usePathname().split('/')
    const currentTab = pathname[2] || pathname[1]

    function handleClick(event){
        const { id } = event.target
        let route = '/admin'
        if (id !== 'admin'){
            route += '/' + id
        }

        router.push(route)
    }

    return <nav className="flex flex-col items-center gap-y-[2.2rem] pt-[1rem] w-[250px] h-full bg-gray-50 border-r shadow-md">
        <div className="flex w-[80%] h-[80px] justify-center align-center p-[1rem] cursor-pointer"
            onClick={handleClick}
            id='admin'>
            <Image  className="w-auto h-[50px]"
                src={logo_2} alt='logo' width={1200} height={1000}/>
        </div>
        <div className="flex flex-col gap-y-[1rem]">
            <motion.h1 className={`${currentTab === 'clients' ? 'text-black' : 'text-gray-500'}
                text-left text-[1.1rem] font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                onClick={handleClick}
                id='clients'
                >Clientes</motion.h1>
            <motion.h1 className={`${currentTab === 'orders' ? 'text-black' : 'text-gray-500'}
                text-left text-[1.1rem] font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                >Pedidos</motion.h1>
            <motion.h1 className={`${currentTab === 'bills' ? 'text-black' : 'text-gray-500'}
                text-left text-[1.1rem] font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                >Facturación</motion.h1>
            <motion.h1 className={`${currentTab === 'sales' ? 'text-black' : 'text-gray-500'}
                text-left text-[1.1rem] font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                >Ventas</motion.h1>
            <motion.h1 className={`${currentTab === 'stats' ? 'text-black' : 'text-gray-500'}
                text-left text-[1.1rem] font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                >Estadísticas</motion.h1>
            <motion.h1 className={`${currentTab === 'others' ? 'text-black' : 'text-gray-500'}
                text-left text-[1.1rem] font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                >Otro</motion.h1>
        </div>
    </nav>
}

export default React.memo(NavBar) // memoriza el componente y solo es re-renderizado cuando cambian las props del mismo