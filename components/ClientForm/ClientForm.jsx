import { Field, Form, Formik } from 'formik'
import { motion } from 'framer-motion';
import { useState } from 'react';
import validationSchema from './validation'

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

    return <Formik initialValues={{
        name: '',
        surname: '',
        location: '',
        zipCode: '',
        birthDate: '',
        phoneNumber: '',
        email: '',
        idNumber: '',
        occupation: '',
        neighborhood: '',
        healthInsurance: '',
        address: '',
        cuit: '',
        iva: ''
    }}
    validationSchema={validationSchema}
    onSubmit={(values)=> {
        alert(JSON.stringify(values, null, 2));
    }}> 
        {({errors, touched})=>(
        <Form className='flex flex-col gap-y-[2rem] gap-x-[2rem] overflow-hidden'>
            <motion.div className='flex pt-[0.5rem] relative gap-x-[1rem] items-center'
                variants={pages}
                animate={page}
                transition={{duration: 0.5}}>
                <div className='flex gap-x-[1rem] w-fit h-fit'>
                    <div className='flex flex-col align-center gap-y-[1.6rem]'>
                        <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="name"
                            >Nombre</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                id="name"
                                name="name"
                                type="text"
                                maxLength={25}
                                tabIndex="1"/>
                            {errors.name && touched.name ? 
                                <h1 className='absolute top-[3.8rem] text-[0.8rem] text-red-500'>{errors.name}</h1>
                                : null}
                        </div>
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="idNumber"
                            >DNI</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                id="idNumber"
                                name="idNumber"
                                type="text"
                                tabIndex="3"/>
                            {errors.idNumber && touched.idNumber ?
                                <h1 className='absolute top-[8.6rem] text-[0.8rem] text-red-500'>{errors.idNumber}</h1>
                            : null}
                        </div>
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="birthDate"
                            >Fecha de nacimiento</label>
                            <Field className={`w-[160px] h-[22px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                id="birthDate"
                                name="birthDate"
                                type="date"
                                tabIndex="5"/>
                            {errors.birthDate && touched.birthDate ?
                                <h1 className='absolute top-[13.3rem] text-[0.8rem] text-red-500'>{errors.birthDate}</h1>
                                : null}
                        </div>
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="location"
                            >Localidad</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                id="location"
                                name="location"
                                type="text"
                                tabIndex="7"/>
                            {errors.location && touched.location ?
                                <h1 className='absolute top-[18.1rem] text-[0.8rem] text-red-500'>{errors.location}</h1>
                                : null}
                        </div>
                    </div>
                    <div className='flex flex-col align-center gap-y-[1.6rem]'>
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="surname"
                            >Apellido</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                id="surname"
                                name="surname"
                                type="text"
                                tabIndex="2"
                                maxLength={25}/>
                            {errors.surname && touched.surname ?
                                <h1 className='absolute top-[3.8rem] text-[0.8rem] text-red-500'>{errors.surname}</h1>
                                : null}
                        </div>
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="email"
                            >Correo electrónico</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                id="email"
                                name="email"
                                type="text"
                                tabIndex="4"/>
                            {errors.email && touched.email ?
                                <h1 className='absolute top-[8.6rem] text-[0.8rem] text-red-500'>{errors.email}</h1>
                                : null}
                        </div>            
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="phoneNumber"
                            >Número de teléfono</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                tabIndex="6"/>
                            {errors.phoneNumber && touched.phoneNumber ?
                                <h1 className='absolute top-[13.3rem] text-[0.8rem] text-red-500'>{errors.phoneNumber}</h1>
                                : null}
                        </div>
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="zipCode"
                            >Código postal</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                id="zipCode"
                                name="zipCode"
                                type="text"
                                tabIndex="8"/>
                            {errors.zipCode && touched.zipCode ?
                                <h1 className='absolute top-[18.1rem] text-[0.8rem] text-red-500'>{errors.zipCode}</h1>
                                : null}
                        </div>
                    </div>
                </div>
                <div className='flex w-fit h-fit gap-x-[2rem]'>
                    <div className='flex flex-col align-center gap-y-[1.6rem]'>
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="occupation"
                            >Ocupación</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} mb-[0.4rem] bg-transparent`}
                                id="occupation"
                                name="occupation"
                                type="text"
                                tabIndex="9"/>
                            {errors.occupation && touched.occupation ?
                                <h1 className='absolute top-[5.6rem] text-[0.8rem] text-red-500'>{errors.occupation}</h1> 
                                : null}  
                        </div>
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="healthInsurance"
                            >Obra social</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} mb-[0.4rem] bg-transparent`}
                                id="healthInsurance"
                                name="healthInsurance"
                                type="text"
                                tabIndex="11"/>
                            {errors.healthInsurance && touched.healthInsurance ?
                                <h1 className='absolute top-[10.8rem] text-[0.8rem] text-red-500'>{errors.healthInsurance}</h1>   
                                : null}
                        </div>
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="address"
                            >Dirección</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} mb-[0.4rem] bg-transparent`}
                                id="address"
                                name="address"
                                type="text"
                                tabIndex="13"/>
                            {errors.address && touched.address ?
                                <h1 className='absolute top-[15.9rem] text-[0.8rem] text-red-500'>{errors.address}</h1>
                                : null}
                        </div>
                    </div>
                    <div className='flex flex-col align-center gap-y-[1.6rem]'>
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="neighborhood"
                            >Barrio</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} mb-[0.4rem] bg-transparent`}
                                id="neighborhood"
                                name="neighborhood"
                                type="text"
                                tabIndex="10"/>
                            <h1 className='absolute top-[5.6rem] text-[0.8rem] text-red-500'>{errors.neighborhood}</h1>
                        </div>
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="cuit"
                            >CUIT</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} mb-[0.4rem] bg-transparent`}
                                id="cuit"
                                name="cuit"
                                type="text"
                                tabIndex="12"/>
                            <h1 className='absolute top-[10.8rem] text-[0.8rem] text-red-500'>{errors.cuit}</h1> 
                        </div>
                        <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                            <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="iva"
                            >IVA</label>
                            <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                id="iva"
                                name="iva"
                                type="text"
                                tabIndex="14"/>
                            <h1 className='absolute top-[15.9rem] text-[0.8rem] text-red-500'>{errors.iva}</h1> 
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
                    <motion.button
                        className='border w-fit h-fit bg-[#2756A8] rounded-full p-[0.2rem] pl-[0.4rem] pr-[0.4rem] text-white text-[0.9rem] cursor-pointer'
                        type='submit'
                        variants={button}
                        initial=''
                        style={{background: 'linear-gradient(55deg, #2756a8, #e21744)'}}
                        transition={{duration: 0.1}}
                    >CREAR</motion.button>
                <motion.label
                    className='border w-fit h-fit bg-[#2756A8] rounded-full p-[0.2rem] pl-[0.4rem] pr-[0.4rem] text-white text-[0.8rem] cursor-pointer'
                    variants={button}
                    animate={page === 'first'? 'visible' : 'hidden'}
                    transition={{duration: 0.1}}
                    onClick={()=> setPage('last')}
                    >Siguiente</motion.label>
            </div>
        </Form>)}
    </Formik>
}