'use client'
import img1 from '@/public/carousel1.jpg'
import img2 from '@/public/carousel2.jpg'
import img3 from '@/public/carousel3.jpg'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Carousel(){
    const images = [img1, img2, img3]
    const [position, setPosition] = useState(0)

    return <div className="flex overflow-hidden w-[100%] h-[400px]">
        <div className='flex'>
            {images.map((img, index)=>
                <motion.div
                    key={'carouselImage_' + index}
                    initial={{right: '0px'}}
                    animate={{right: `${position * 1000}px`}}
                    transition={{
                        duration: 1.2}}
                    className='w-max h-[100%] relative right-[1000px]'>
                    <Image className='object-cover w-[1000px] h-[100%]'
                        src={img}
                        key={'image_'+index}
                        alt={'image_'+index}
                        width={1600} height={1600}/>
                </motion.div>
            )}
        </div>
        <div className='flex justify-center gap-x-[0.6rem] self-end absolute w-[1000px] h-[20px]'>
            <motion.div 
                className={`rounded-[50%] ${position === 0 ? 'bg-white' : 'bg-black'} w-[8px] h-[8px]`}
                onClick={()=> setPosition(0)}/>
            <motion.div
                className={`rounded-[50%] ${position === 1 ? 'bg-white' : 'bg-black'} w-[8px] h-[8px]`}
                onClick={()=> setPosition(1)}/>
            <motion.div
                className={`rounded-[50%] ${position === 2 ? 'bg-white' : 'bg-black'} w-[8px] h-[8px]`}
                onClick={()=> setPosition(2)}/>
        </div>
    </div>
}