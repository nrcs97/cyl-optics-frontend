'use client'
import { motion, useScroll, useSpring } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import logo from "../../public/logo.png"
import login_logo from '@/public/login_logo.png'
import { usePathname } from 'next/navigation';
import { useRouter } from "next/navigation"

export default function Header(){
    const router = useRouter()
    let path = usePathname().slice(1)
    switch (path){
        case 'appointments':
            path = 'Turnos'
            break;
        case 'products':
            path = 'Productos'
            break;
        case '':
            path = 'Inicio'
            break;
        default:
            break;
    }
    const [selectedTab, setSelectedTab] = useState(path)
    const tabs = ['Inicio', 'Productos', 'Turnos', 'Contacto']

    const handleClick = (event)=> {
        const { id } = event.target
        setSelectedTab(id)
        let newPath = ''
        switch (id){
            case 'Inicio':
                newPath = '/'
                break
            case 'Productos':
                newPath = '/products'
                break
            case 'Turnos':
                newPath = '/appointments'
                break
            case 'Contacto':
                newPath = '/contact'
            default:
                break
        }
        router.push(newPath)
    }

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
            stiffness: 100,
            damping: 25,
            restDelta: 0.0001
        })

    return <header className="flex flex-col self-center w-[1000px] bg-gray-50 pt-[0.5rem]">
        <div className="flex self-left justify-center w-[100%]">
            <div className="flex w-[40%] text-[0.8rem] p-[2rem] text-gray-500 font-semibold font-creatoRegular leading-tight gap-x-[2rem]">
                { tabs.map(tab => <div className="flex flex-col" key={tab}>
                        <motion.label
                            id={tab}
                            onClick={handleClick}
                            whileHover={{color: "rgb(0, 0, 0)",
                                transition: {duration: 0.6}}}>
                            {tab}
                        </motion.label>
                    {selectedTab === tab ?
                    <motion.div
                        layoutId="underline"
                        className="bg-black w-auto h-[1px]"/>
                    : null}
                    </div>)
                }
            </div>
            <div className="flex justify-center self-center w-[20%] h-fit">
                <Image className="object-cover self-end w-auto h-[60px]" alt='logo_cyl'
                src={logo} width={1200} height={1000} />
            </div>
            <div className="flex justify-end gap-x-[0.3rem] w-[40%]">
                <div className="relative top-[0.075rem] flex items-center grayscale">
                    <Image className="w-[10px] h-[10px]" alt='login_img'
                        src={login_logo} width={300} height={300}/>
                </div>
                <div className="p-[2rem] pl-[0]">
                    <motion.label className="w-fit h-fit text-[0.8rem] text-gray-500 font-semibold font-creatoRegular leading-tight"
                        whileHover={{color: "rgb(0, 0, 0)",
                        transition: {duration: 0.6}}}
                        onClick={()=> router.push('/login')}>
                        Login
                    </motion.label>
                </div>
            </div>
        </div>
        
        {/* <div>
            <motion.div
                style={{scaleX}}
                className="bg-red-500 h-[4px] w-[100%] origin-left"/> 
        </div> */}
        {/* 'origin-left' configura la posición del comienzo de la transformación */}
    </header>
}