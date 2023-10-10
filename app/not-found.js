'use client'
// import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NotFound() {
    // const router = useRouter()
    // setTimeout(()=> router.push('/'), 1500)
  return (
    <div className='relative top-[10rem] flex flex-col h-fit w-fit items-center self-center'>
      <h2 className='text-gray-500 text-[1.5rem] font-normal'>Oops!</h2>
      <p className='text-gray-500 text-[1.5rem] font-normal'>{'Looks like there is nothing to see here ;('}</p>
      {/* <p className='text-black text-[1.2rem] font-extralight'>Redirecting to home ...</p> */}
      <Link className='border-[1px] border-black m-[1rem] rounded-xl text-black pl-[1rem] pr-[1rem]' href="/">Return Home</Link>
    </div>
  )
}