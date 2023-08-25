import NavBar from '@/components/NavBar/NavBar'
import React from 'react'
import { useRouter } from "next/navigation"

function Dashboard({children, title, returnPath=''}){
    const router = useRouter()

    return <main className="flex flex-col gap-y-[2rem] max-h-[100vh]">
        <section className="flex h-[100vh]">
            <NavBar/>
            <div className="flex flex-col gap-y-[0.5rem] w-full h-full p-[1.4rem] pl-[3rem]">
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
        </section>
</main>
}

export default React.memo(Dashboard)