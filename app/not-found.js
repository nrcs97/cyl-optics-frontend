'use client'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()
    console.log('Renderizando')
    setTimeout(()=> router.push('/'), 10000)
  return (
    <div className='flex flex-col self-center items-center'>
      <h2 className='text-black text-[2.4rem] font-black'>Oops!</h2>
      <p className='text-black text-[2.4rem] font-black'>{'Looks like there is nothing to see here ;('}</p>
    </div>
  )
}