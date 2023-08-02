'use client'
import Image from "next/image"
import logo from '@/public/logo.png'
import Card from '@/components/Card/Card'

export default function Admin(){
    return <main className="flex flex-col gap-y-[2rem] pb-[2.5rem] min-h-[100vh]">
        <section>
            <div className="flex w-[100%] h-[80px] justify-center items-center">
                <Image  className="w-auto h-[60px]"
                    src={logo} alt='logo' width={1200} height={1000} />
            </div>
        </section>
        <section className="flex h-[100%] justify-center">
            <div className="grid grid-cols-3 grid-rows-2 auto-cols-auto auto-rows-min h-fit h-fit
                gap-5 justify-items-center">
                <Card text='Clientes'/>
                <Card text='Pedidos'/>
                <Card text='Facturación'/>
                <Card text='Ventas'/>
                <Card text='Otro'/>
                <Card text='Estadísticas'/>
            </div>
        </section>
</main>
}