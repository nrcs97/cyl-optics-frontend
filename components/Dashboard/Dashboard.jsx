import NavBar from '@/components/NavBar/NavBar'
import React from 'react'
import { usePathname } from 'next/navigation'

function Dashboard({children}){
    const routes = usePathname().split('/')

    return <main className="flex flex-col gap-y-[2rem] max-h-[100vh]">
        <section className="flex h-[100vh]">
            <NavBar/>
            <div className="flex flex-col gap-y-[2rem] w-full h-full p-[1.4rem] pl-[3rem]">
                <div className='flex items-baseline gap-x-[0.5rem]'>
                    <h1 className="font-thin text-gray-800 text-[3rem]">{routes[2]}</h1>
                </div>
                {children}
            </div>
        </section>
</main>
}

export default React.memo(Dashboard)