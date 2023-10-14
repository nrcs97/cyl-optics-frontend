'use client'
import Image from "next/image"
import logo_2 from "@/public/logo_2.png"
import { motion } from "framer-motion"
import { BarLoader } from 'react-spinners';
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Login(){
    const [submit, setSubmit] = useState<string>('blank')
    const [error, setError] = useState<{ username: string, password: string}>({username: '', password: ''})
    const router = useRouter()

    function handleOnSubmit(event : any){
        event.preventDefault()        
        const user = {
            username: event.target[0].value,
            password: event.target[1].value
        }
        axios.post('http://localhost:3001/auth/login', user)
        .then(response => {
            setSubmit('loading')
            setTimeout(()=>{
                const tokens = response.data
                document.cookie = `cyl_user=${JSON.stringify(tokens)}`
                router.push('/')
            }, 2000)
        }, error => {
            const {message} = error.response.data
            
            if (message === 'The user doesn\'t exist.'){
                setError({...error, username: 'El usuario no existe'})
            } 
            if (message === 'Incorrect password.') {
                setError({...error, password: 'Contraseña incorrecta'})
            }
            setTimeout(()=>setError({username: '', password: ''}), 4000)
        })
    }

    function handleOnChange(){
        setError({username: '', password: ''})
    }    

    return <main className="flex flex-col items-center justify-center gap-y-[2rem] min-h-[100vh]">
        <div className="flex items-center justify-center w-[650px] h-[500px] rounded-2xl shadow-lg border">
            <div className="flex justify-center items-center h-[100%] w-[50%] border-r-[1px]">
                <Image  className="w-[200px] h-auto"
                    alt='logo' src={logo_2} width={1000} height={1000}/>
            </div>
            <div className="flex flex-col gap-y-[2rem] justify-center items-center h-[100%] w-[50%]">
                <h1 className="text-black text-[30px] font-extralight">Inicio de sesión</h1>
                <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-[0.3rem] h-fit w-fit">
                    <label className="text-black font-light">Usuario</label>
                    <input name='user' className="border outline-none text-black pl-[0.4rem]"
                        onChange={handleOnChange}/>
                    <label className="text-black font-light">Contraseña</label>
                    <input type='password' name='password' className="border outline-none text-black pl-[0.4rem]"
                        onChange={handleOnChange}/>
                    <div className="min-h-[1.2rem] min-w-[1.2rem]">
                        <h1 className="text-red-500 text-[0.75rem]">{error.username}</h1>
                        <h1 className="text-red-500 text-[0.75rem]">{error.password}</h1>
                    </div>
                    <div className="flex flex-col justify-center mt-[3rem]">
                        <motion.button className="text-black border rounded-2xl p-[1.6rem] pt-[0.2rem] pb-[0.2rem]"
                        whileTap={{scale: 0.9, transition: {duration: '0.1'}}}
                        animate={submit === 'loading' ? {opacity: 0} : {opacity: 1}}
                        transition={{duration: 0}}
                        type="submit"
                        >Login</motion.button>
                        { submit === 'loading' ? 
                        <BarLoader className="absolute self-center"/>
                        : null}
                    </div>
                </form>
            </div>
        </div>
    </main>
}