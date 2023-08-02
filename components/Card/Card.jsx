import { motion } from "framer-motion"

export default function Card({text='', hoverColor='rgb(226, 23, 68)'}){
    return <motion.div className={`flex w-[275px] h-[220px] rounded-xl bg-gradient-to-tl
        bg-gray-50 border justify-center items-center shadow`}
            whileHover={{backgroundColor: hoverColor}}
            transition={{duration: 1.5}}>
        <h1 className="font-normal font-creatoRegular leading-tight text-[1.2rem] text-black">{text}</h1>
    </motion.div>
}