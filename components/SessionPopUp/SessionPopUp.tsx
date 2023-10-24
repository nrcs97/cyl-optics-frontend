'use client'
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Logout, Update } from "@/helpers/session"
import { getAuthorization } from "@/helpers/getAuthorization"

export default function SessionPopUp(){
    const router = useRouter()
    const [show, setShow] = useState<boolean>(false)

    useEffect(()=>{
        getAuthorization().then( auth => {
            if (!auth.accessToken && auth.refreshToken) setShow(true)
        })
    }, [])

    function handleClick(e: any){
        const { name } = e.target
        switch (name){
            case 'yes':
                Update()
                setShow(false)
                break;
            case 'logout':
                Logout()
                router.push('/')
                setShow(false)
                break;
            default:
                break;
        }
    }
    if (show) return <div className="absolute flex justify-center w-[100vw] h-[100vh]" 
        style={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}>
        <div className="self-center flex flex-col
            justify-center items-center shadow bg-white rounded-xl w-[300px]
            gap-y-[0.8rem] h-[120px]">
            <h1 className="text-black select-none">Sesión caducada, quiere continuar?</h1>
            <div className="flex w-full h-fit justify-evenly">
                <button className="text-black border w-[3rem] rounded-xl select-none"
                name="yes" onClick={handleClick}>Si</button>
                <button className="text-black border w-[7rem] rounded-xl select-none"
                name="logout" onClick={handleClick}>Cerrar sesión</button>
            </div>
        </div>
    </div>
    else return null
}