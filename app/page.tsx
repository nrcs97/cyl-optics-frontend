'use client'
import Carousel from '../components/Carousel/Carousel'
import { useRouter } from "next/navigation"

export default function Home(){
  const router = useRouter()

  return <main className="flex flex-col gap-y-[2rem] pb-[2.5rem] min-h-[100vh] bg-gray-50">
    <Carousel/>
    <section>
      <div className='flex flex-col items-center gap-y-[1.5rem] w-[100%]'>
        <h1 className='text-[2.6rem] font-thin font-creatoRegular leading-tight text-black'>
          Reserva un turno!
        </h1>
          <button className='bg-orange-300 p-[0.8rem] text-black rounded-3xl font-normal'
            onClick={()=> router.push('/turnos')}
            >RESERVAR</button>
      </div>
    </section>
  </main>
}