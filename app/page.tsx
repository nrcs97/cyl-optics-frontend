'use client'
import Carousel from '../components/Carousel/Carousel'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

export default function Home(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({target: ref, offset: ["0 1.33", "0.66 1"]})

  return <main className="flex flex-col items-center pb-[2.5rem] w-[100vw] min-h-[100vh] bg-gray-50">
    <Carousel/>
    <motion.div className='fixed w-[100%] h-[20px] bg-red-500' style={{scaleX: scrollYProgress}}/>
    <motion.section className='flex flex-col gap-y-[4rem] w-[80%] h-[100vh] border p-[1.4rem]'>
      <h1 className='text-[56px] text-gray-500 font-thin'>SECCIÓN 1</h1>
      <h1 className='text-[36px] text-gray-500 font-thin self-center'>DATO 1</h1>
      <h1 className='text-[36px] text-gray-500 font-thin self-center'>DATO 2</h1>
      <h1 className='text-[36px] text-gray-500 font-thin self-center'>DATO 3</h1>
    </motion.section>

    <motion.section ref={ref} className='w-[80%] h-[100vh] border pt-[1.4rem] pb-[1.4rem]'
      style={{opacity: scrollYProgress}}>
      <h1 className='text-[48px] text-gray-500 font-thin'>SECCIÓN 2</h1>
    </motion.section>

    <section className='w-[80%] h-[100vh] border pt-[1.4rem] pb-[1.4rem]'>
      <h1 className='text-[48px] text-gray-500 font-thin'>SECCIÓN 3</h1>
    </section>

    <section className='w-[80%] h-[100vh] border pt-[1.4rem] pb-[1.4rem]'>
      <h1 className='text-[48px] text-gray-500 font-thin'>SECCIÓN 4</h1>
    </section>
  </main>
}