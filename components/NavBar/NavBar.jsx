import { motion } from "framer-motion"
import Image from "next/image"
import logo_2 from '@/public/logo_2.png'
import { useRouter } from "next/navigation"
import React from "react"

function NavBar({currentTab}){
    const router = useRouter()
    return <nav className="flex flex-col items-center gap-y-[2.2rem] pt-[1rem] w-[250px] h-full bg-gray-50 border-r shadow-md">
        <div className="flex w-[80%] h-[80px] justify-center align-center p-[1rem] cursor-pointer"
            onClick={()=> router.push('/admin')}>
            <Image  className="w-auto h-[50px]"
                src={logo_2} alt='logo' width={1200} height={1000}/>
        </div>
        <div className="flex flex-col gap-y-[1rem]">
            <motion.h1 className={`${currentTab === 'clients' ? 'text-black' : 'text-gray-500'}
                text-left text-[1.1rem] font-light cursor-pointer`}
                whileHover={{color: 'rgb(0, 0, 0)'}}
                transition={{duration: 0.6}}
                onClick={()=>{router.push('/admin/clients')}}
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