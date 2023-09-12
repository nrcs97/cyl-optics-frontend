'use client'
import { useParams } from "next/navigation"
import Dashboard from '@/components/Dashboard/Dashboard'

export default function ClientDetail(){
    const { id } = useParams()

    return <Dashboard title='Ficha del cliente'>
        <div className="flex flex-col gap-y-[0.6rem] w-[800px] h-[480px]
            border p-[1.2rem] shadow rounded-xl bg-white">
            <div>
                <h1 className="font-extralight text-gray-900 text-[2.3rem] leading-[2.4rem]"> Client detail {id}</h1>
            </div>
            <div>
                <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                    <label className='text-black text-[1rem] font-normal' htmlFor="name"
                    >Nombre</label>
                    <input className={`w-[160px] border-b border -outline-0 text-black text-[0.9rem]
                        font- bg-transparent`}
                        id="name"
                        name="name"
                        type="text"
                        maxLength={25}
                        tabIndex={1}/>
                </div>
            </div>
        </div>
    </Dashboard>
}