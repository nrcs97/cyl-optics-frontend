import { motion } from "framer-motion"

export default function Card({text='', hoverColor=['22', '32', '23']}){
    return <motion.div className={`flex w-[80px] h-[80px] p-[0.6rem] bg-gradient-to-tl
        bg-gray-50 justify-center items-center`}
            whileHover={{width: 2}}
            transition={{duration: 0.4}}>
            <h1 className="font-normal font-creatoRegular leading-tight text-[1rem] text-black">{text}</h1>
    </motion.div>
}