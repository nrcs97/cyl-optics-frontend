'use client'
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import axios from "axios"
import Dashboard from '@/components/Dashboard/Dashboard'

export default function ClientDetail(){
    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(()=>{
        axios.get(`http://localhost:3001/clients/${id}`)
        .then(response => setData(response.data))
    }, [])
    console.log(data);
    

    return <Dashboard title='Ficha del cliente'>
        { data ?
            <div className="flex flex-col gap-y-[2rem] w-[800px] h-[480px]
                border-[2px] border-yellow-600 border-opacity-20 p-[1.2rem] shadow rounded-xl bg-white">
                <div className="flex justify-start gap-x-[2rem]">
                    <h1 className="font-extralight text-gray-900 text-[2.3rem] leading-[2.4rem]">{data.name + ' ' + data.surname}</h1>
                    <h1 className="font-extralight text-gray-900 text-[2.3rem] leading-[2.4rem]">#{id}</h1>
                </div>
                <div className="grid grid-rows-5 grid-cols-3 gap-4">
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >Nombre</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.name}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >Apellido</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.surname}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >Fecha de nacimiento</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.birthDate}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >D.N.I.</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.idNumber}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >Localidad</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.location}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >Teléfono</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.phoneNumber}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >Correo electrónico</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.email}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >Ocupación</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.occupation}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >Obra Social</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.healthInsurance}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >Dirección</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.address}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >Código Postal</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.zipCode}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >Barrio</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.neighborhood}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >IVA</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.iva}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className='text-black text-[1rem] font-normal' htmlFor="name"
                        >CUIT</label>
                        <input className={`w-[200px] h-[30px] text-[16px] pl-[0.3rem] border-b border -outline-0 text-black text-[0.9rem]
                            rounded bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            placeholder={data.cuit}
                            maxLength={25}
                            tabIndex={1}/>
                    </div>
                </div>
            </div>
        : null }
    </Dashboard>
}