import { useFormik } from 'formik'
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ClientForm({fontWidth='normal', fontColor='black',
    textColor='black'}){

    const [page, setPage] = useState('first')
    const pages = {
        last: {
            x: -350,
            transition: { type: 'spring', stiffness: 110, damping: 20}
        },
        first: {
            x: 0,
            transition: { type: 'spring', stiffness: 110, damping: 20}
        }
    }
    const button = {
        visible: {
            opacity: 1,
            cursor: 'pointer'
        },
        hidden: {
            opacity: 0,
            cursor: 'default'
        }
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            location: '',
            zipCode: '',
            birthDate: '',
            phoneNumber: '',
            email: '',
            idNumber: '',
            occupation: '',
            healthInsurance: '',
            address: '',
            neighborhood: '',
            cuit: '',
            iva: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return <form className='flex flex-col gap-y-[2rem] gap-x-[2rem] overflow-hidden' onSubmit={formik.handleSubmit}>
        <motion.div className='flex pt-[0.5rem] relative gap-x-[1rem] items-center'
            variants={pages}
            animate={page}
            transition={{duration: 0.5}}>
            <div className='flex gap-x-[1rem] items-center w-fit h-fit'>
                <div className='flex flex-col justify-start gap-y-[1.6rem]'>
                    <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="name">Nombre</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="idNumber">DNI</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                            id="idNumber"
                            name="idNumber"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.idNumber}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="birthDate">Fecha de nacimiento</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                            id="birthDate"
                            name="birthDate"
                            type="date"
                            onChange={formik.handleChange}
                            value={formik.values.birthDate}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="location">Localidad</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                            id="location"
                            name="location"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.location}/>
                    </div>
                </div>
                <div className='flex flex-col justify-start gap-y-[1.6rem]'>
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="surname">Apellido</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                            id="surname"
                            name="surname"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.surname}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="email">Correo electrónico</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                            id="email"
                            name="email"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.email}/>
                    </div>            
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="phoneNumber">Número de teléfono</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="zipCode">Código postal</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                            id="zipCode"
                            name="zipCode"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.zipCode}/>                    
                    </div>
                </div>
            </div>
            <div className='flex w-fit h-fit gap-x-[2rem]'>
                <div className='flex flex-col justify-start gap-y-[1.6rem]'>
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="occupation">Ocupación</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} mb-[0.4rem] bg-transparent`}
                            id="occupation"
                            name="occupation"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.occupation}
                        />
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="healthInsurance">Obra Social</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} mb-[0.4rem] bg-transparent`}
                            id="healthInsurance"
                            name="healthInsurance"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.healthInsurance}
                        />
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="address">Dirección</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} mb-[0.4rem] bg-transparent`}
                            id="address"
                            name="address"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.address}
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-start gap-y-[1.6rem]'>
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="neighborhood">Barrio</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} mb-[0.4rem] bg-transparent`}
                            id="neighborhood"
                            name="neighborhood"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.neighborhood}
                        />
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="cuit">CUIT</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} mb-[0.4rem] bg-transparent`}
                            id="cuit"
                            name="cuit"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.cuit}/>
                    </div>
                    <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                        <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="iva">IVA</label>
                        <input className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                            id="iva"
                            name="iva"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.iva}/>
                    </div>
                </div>  
            </div>
        </motion.div>
        <div className='flex h-[100%] justify-between'>
            <motion.label
                className='border w-fit h-fit bg-[#2756A8] rounded-full p-[0.2rem] pl-[0.4rem] pr-[0.4rem] text-white text-[0.8rem] cursor-pointer'
                variants={button}
                initial='hidden'
                animate={page === 'last'? 'visible' : 'hidden'}
                transition={{duration: 0.1}}
                onClick={()=> setPage('first')}
                >Anterior</motion.label>
                <motion.label
                    className='border w-fit h-fit bg-[#2756A8] rounded-full p-[0.2rem] pl-[0.4rem] pr-[0.4rem] text-white text-[0.9rem] cursor-pointer'
                    variants={button}
                    initial='hidden'
                    style={{background: 'linear-gradient(55deg, #2756a8, #e21744)'}}
                    transition={{duration: 0.1}}
                >CREAR</motion.label>
            <motion.label
                className='border w-fit h-fit bg-[#2756A8] rounded-full p-[0.2rem] pl-[0.4rem] pr-[0.4rem] text-white text-[0.8rem] cursor-pointer'
                variants={button}
                animate={page === 'first'? 'visible' : 'hidden'}
                transition={{duration: 0.1}}
                onClick={()=> setPage('last')}
                >Siguiente</motion.label>
        </div>
    </form>

}