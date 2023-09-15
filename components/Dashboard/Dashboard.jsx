import NavBar from '@/components/NavBar/NavBar'
import React from 'react'
import { useRouter } from "next/navigation"
import { useState } from 'react'

function Dashboard({children, title, returnPath=''}){
    const router = useRouter()

    return <main className="flex h-full overflow-y-scroll">
        <NavBar/>
        <div className="flex flex-col gap-y-[0.7rem] w-full h-full pl-[3rem] pr-[3rem] pt-[1.5rem] pb-[3rem]">
            <div className='flex flex-col items-baseline gap-x-[0.5rem]'>
                <h1 className="font-thin text-gray-800 text-[3rem]">{title}</h1>
                {returnPath ?
                    <label className="text-black font-light cursor-pointer"
                    onClick={()=> router.push(returnPath)}>« Atrás</label>
                    : null
                }
            </div>
            {children}
        </div>
    </main>
}

export default React.memo(Dashboard)