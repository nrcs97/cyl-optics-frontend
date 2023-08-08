import { motion } from "framer-motion"
import Image from "next/image"
import logo_2 from '@/public/logo_2.png'

export default function NavBar(){

    return <nav className="flex flex-col w-[20%] h-full bg-gray-50 border-r shadow">
        <div className="flex w-[80%] h-[80px] justify-left items-center p-[1rem]">
            <Image  className="w-auto h-[50px]"
                src={logo_2} alt='logo' width={1200} height={1000}/>
            <h1 className="text-gray-500 m-[1rem]">Admin dashboard</h1>
        </div>
        <motion.h1 className="text-gray-500 text-left p-[0.5rem] pl-[1.5rem] font-black cursor-pointer"
            whileHover={{color: 'rgb(0, 0, 0)'}}
            transition={{duration: 0.6}}
            >Clientes</motion.h1>
        <motion.h1 className=" text-gray-500 text-left p-[0.5rem] pl-[1.5rem] font-black cursor-pointer"
            whileHover={{color: 'rgb(0, 0, 0)'}}
            transition={{duration: 0.6}}
            >Pedidos</motion.h1>
        <motion.h1 className=" text-gray-500 text-left p-[0.5rem] pl-[1.5rem] font-black cursor-pointer"
            whileHover={{color: 'rgb(0, 0, 0)'}}
            transition={{duration: 0.6}}
            >Facturación</motion.h1>
        <motion.h1 className=" text-gray-500 text-left p-[0.5rem] pl-[1.5rem] font-black cursor-pointer"
            whileHover={{color: 'rgb(0, 0, 0)'}}
            transition={{duration: 0.6}}
            >Ventas</motion.h1>
        <motion.h1 className=" text-gray-500 text-left p-[0.5rem] pl-[1.5rem] font-black cursor-pointer"
            whileHover={{color: 'rgb(0, 0, 0)'}}
            transition={{duration: 0.6}}
            >Estadísticas</motion.h1>
        <motion.h1 className=" text-gray-500 text-left p-[0.5rem] pl-[1.5rem] font-black cursor-pointer"
            whileHover={{color: 'rgb(0, 0, 0)'}}
            transition={{duration: 0.6}}
            >Otro</motion.h1>
    </nav>
}