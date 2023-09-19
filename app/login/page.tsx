'use client'
import Image from "next/image"
import logo_2 from "@/public/logo_2.png"
import { motion } from "framer-motion"

export default function Login(){
    return <main className="flex flex-col items-center justify-center gap-y-[2rem] min-h-[100vh]">
        <div className="flex items-center justify-center w-[650px] h-[500px] rounded-2xl shadow-lg border">
            <div className="flex justify-center items-center h-[100%] w-[50%] border-r-[1px]">
                <Image  className="w-[200px] h-auto"
                    alt='logo' src={logo_2} width={1000} height={1000}/>
            </div>
            <div className="flex flex-col gap-y-[2rem] justify-center items-center h-[100%] w-[50%]">
                <h1 className="text-black text-[30px] font-extralight">Inicio de sesión</h1>
                <div className="flex flex-col gap-y-[0.3rem] h-fit w-fit">
                    <label className="text-black font-light">Usuario</label>
                    <input className="border outline-none text-black pl-[0.4rem]"/>
                    <label className="text-black font-light">Contraseña</label>
                    <input className="border outline-none text-black pl-[0.4rem]"/>
                </div>
                <motion.button className="text-black border rounded-2xl p-[1.6rem] pt-[0.2rem] pb-[0.2rem]"
                    whileTap={{scale: 0.9, transition: {duration: '0.1'}}}
                    >Login</motion.button>
            </div>
        </div>
    </main>
}