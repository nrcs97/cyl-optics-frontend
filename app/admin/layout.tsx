'use client'
import NavBar from '@/components/NavBar/NavBar'
import React from 'react'
import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { notFound } from "next/navigation"
import { getAuthorization } from '@/helpers/getAuthorization'

function DashboardLayout({children} :
    {children: React.ReactNode}){
    const router = useRouter()
    const pathname = usePathname().split('/')
    const title = pathname.pop()
    pathname.shift()
    const returnPath = '/' + pathname.join('/')

    const [ show, setShow ] = useState(false)
    const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        getAuthorization().then(auth => {            
            if (!auth.refreshToken) setRedirect(true)
            // analizar casos con accessToken: false y como lanzar PopUp
        })
    }, [show])

    if (redirect) notFound()
    if (!show) return <></>
    else return <main className="flex h-full overflow-y-scroll">
        <NavBar/>
        <div className="flex flex-col gap-y-[0.7rem] w-full h-full pl-[3rem] pr-[3rem] pt-[1.5rem] pb-[3rem]">
            <div className='flex flex-col items-baseline gap-x-[0.5rem]'>
                <h1 className="font-thin text-gray-800 text-[3rem]">{title}</h1>
                {returnPath && pathname.length ?
                    <label className="text-black font-light cursor-pointer"
                    onClick={()=> router.push(returnPath)}>« Atrás</label>
                    : null
                }
            </div>
            {children}
        </div>
    </main>
}

export default React.memo(DashboardLayout)