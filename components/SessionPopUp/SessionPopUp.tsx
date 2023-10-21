'use client'
import { useRouter } from "next/navigation"
import axios from "axios"
import { getCookies, setCookies } from '../../helpers/cookies'

export default function SessionPopUp({refreshToken}: {refreshToken : string}){
    const router = useRouter()

    function handleClick(e: any){
        const { name } = e.target
        switch (name){
            case 'yes':
                const cookies: any = getCookies()

                axios.post('http://localhost:3001/token/refresh', {token: refreshToken})
                .then(response => {
                    const { newAccessToken } : {newAccessToken: string} = response.data
                    const userCookie = JSON.parse(cookies.cyl_user)              
                    setCookies('cyl_user', 
                        JSON.stringify({...userCookie, accessToken: newAccessToken}))
                    
                    router.refresh()
                })
                .catch(error => console.log(error))
                break;
            default:
                break;
        }
    }

    return <div className="absolute flex justify-center w-[100vw] h-[100vh]" 
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
}