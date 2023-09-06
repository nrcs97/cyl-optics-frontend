import { motion } from 'framer-motion'

export default function DataSheet({client}){
    return <motion.div className="flex flex-col gap-y-[0.5rem] w-[380px] h-[420px] bg-gray-400 rounded-3xl p-[2rem]"
    style={{background: 'linear-gradient(55deg, #e15338, #e3cc1c)'}}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        <div className='flex h-[4.5rem] overflow-hidden justify-start mb-[0.5rem] items-center'>
            <h1 className='font-extralight text-gray-900 text-[2.2rem] leading-[2.4rem]'>
                {client.name + ' ' + client.surname}</h1>
        </div>
        <motion.div className='flex flex-col gap-y-[0.3rem] h-[60%]'>
            <div className='flex gap-x-[1rem] justify-between'>
                <h1 className='text-black text-[17px] font-light'>DNI:</h1>
                <div className='w-[42%]'>
                    <h1 className='text-black text-center font-black min-h-[24px]'>{client.idNumber}</h1>
                    <hr className='border-black'/>
                </div>
            </div>
            <div className='flex gap-x-[1rem] justify-between'>
                <h1 className='text-black text-[17px] font-light'>No. de teléfono:</h1>
                <div className='w-[42%]'>
                    <h1 className='text-black text-center font-black min-h-[24px]'>{client.phoneNumber}</h1>
                    <hr className='border-black'/>
                </div>
            </div>
            <div className='flex gap-x-[1rem] justify-between'>
                <h1 className='text-black text-[17px] font-light'>Fecha de nacimiento:</h1>
                <div className='w-[42%]'>
                    <h1 className='text-black text-center font-black min-h-[24px]'>{client.birthDate}</h1>
                    <hr className='border-black'/>
                </div>
            </div>
            <div className='flex gap-x-[1rem] justify-between'>
                <h1 className='text-black text-[17px] font-light'>Ocupación:</h1>
                <div className='w-[42%]'>
                    <h1 className='mt-[0.4rem] h-[5rem] text-black font-black min-h-[24px] border-[1px] border-black'>{client.ocupation}</h1>
                </div>
            </div>
            {/* <div className='flex gap-x-[1rem] justify-between'>
                <h1 className={`text-black text-[17px] font-light ${client.location === '' ? 'opacity-60' : ''}`}
                    >Residencia:</h1>
                <div className={`w-[42%] ${client.location === '' ? 'opacity-30' : ''}`}>
                    <h1 className='text-black text-center font-black min-h-[24px]'>{client.location}</h1>
                    <hr className='border-black'/>
                </div>
            </div>
            <div className='flex gap-x-[1rem] justify-between'>
                <h1 className={`text-black text-[17px] font-light ${client.address === '' ? 'opacity-60' : ''}`}
                    >Dirección:</h1>
                <div className={`w-[42%] ${client.address === '' ? 'opacity-30' : ''}`}>
                    <h1 className='text-black text-center font-black min-h-[24px]'>{client.address}</h1>
                    <hr className='border-black'/>
                </div>
            </div>
            <div className='flex gap-x-[1rem] justify-between'>
                <h1 className={`text-black text-[17px] font-light ${client.zipCode === '' ? 'opacity-60' : ''}`}
                    >Código postal:</h1>
                <div className={`w-[42%] ${client.zipCode === '' ? 'opacity-30' : ''}`}>
                    <h1 className='text-black text-center font-black min-h-[24px]'>{client.zipCode}</h1>
                    <hr className='border-black'/>
                </div>
            </div>
            <div className='flex gap-x-[1rem] justify-between'>
                <h1 className={`text-black text-[17px] font-light ${client.email === '' ? 'opacity-60' : ''}`}
                    >Email:</h1>
                <div className={`w-[42%] ${client.email === '' ? 'opacity-30' : ''}`}>
                    <h1 className='text-black text-center font-black min-h-[24px]'>{client.email}</h1>
                    <hr className='border-black'/>
                </div>
            </div> */}
        </motion.div>
        <div className='flex justify-between'>
            <label className='p-[0.3rem] font-bold w-fit h-fit bg-gray-600 text-gray-200 text-[12px]
                rounded-xl shadow-lg cursor-pointer select-none'
                style={{background: 'linear-gradient(55deg, #5F5F5F, #737373)'}}>FICHA COMPLETA</label>
            <label className='p-[0.3rem] font-bold w-fit h-fit bg-gray-600 text-gray-200 text-[12px]
                rounded-xl shadow-lg cursor-pointer select-none'
                style={{background: 'linear-gradient(55deg, #5F5F5F, #737373)'}}>HISTORIAL</label>
            <label className='p-[0.3rem] font-bold w-fit h-fit bg-gray-600 text-gray-200 text-[12px]
                rounded-xl shadow-lg cursor-pointer select-none'
                style={{background: 'linear-gradient(55deg, #5F5F5F, #737373)'}}>EDITAR</label>
        </div>
        {/* <div className='flex gap-x-[1rem] justify-between'>
            <h1 className='text-black text-[17px] font-light'>Obra social:</h1>
            <div className='w-[42%]'>
                <h1 className='text-black font-black min-h-[24px]'>{client.healthInsurance}</h1>
                <hr className='border-black'/>
            </div>
        </div>
        <div className='flex gap-x-[1rem] justify-between'>
            <h1 className='text-black text-[17px] font-light'>Barrio:</h1>
            <div className='w-[42%]'>
                <h1 className='text-black font-black min-h-[24px]'>{client.neighborhood}</h1>
                <hr className='border-black'/>
            </div>
        </div> */}
    </motion.div>
}