import { Field, Form, Formik } from 'formik'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BarLoader } from 'react-spinners';
import axios from 'axios';
import validationSchema from './validation'

export default function ClientForm({fontWidth='normal', fontColor='black',
    textColor='black'}){
    const [page, setPage] = useState('first')
    const [formAnimation, setFormAnimation] = useState('blank')
    // variable que cambia a true o false en tiempo real para habilitar el boton submit
    let toSubmit = false

    const pages = {
        last: {
            x: -350,
            transition: { type: 'spring', stiffness: 110, damping: 20}
        },
        first: {
            x: 0,
            transition: { type: 'spring', stiffness: 110, damping: 20}
        },
    }

    const form = {
        reset: {
            opacity: 0,
            scale: 1,
            transition: {duration: 0}
        },
        blank: {
            opacity: 1,
            transition: {duration: 0.6, delay: 0.3}
        },
        submitting: {
            opacity: 0.5,
            transition: {duration: 0.6}
        },
        submitted: {
            scale: 0,
            transition: {duration: 0.6}
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

    function handleInputChange(e, setFieldValue, setFieldError){ // handler that controls specific value inputs
    const { name, value } = e.target
        if (name === 'name' || name === 'surname'){
            if (/^[a-zA-ZÀ-ÖØ-öø-ÿ]*$/.test(value)) // only uppercase, lowercase or empty string regex
                setFieldValue([name], value)
            else setFieldError([name], 'Solo letras')
        }
        if (name === 'idNumber' || name === 'phoneNumber' || name === 'cuit'){
            if (/^(?:[0-9]+)?$/.test(value)) // only numbers or empty string regex
                setFieldValue([name], value)
            else setFieldError([name], 'Solo números')
        }
    }

    return <div>
        {formAnimation === 'submitted' ?
            <div className='flex flex-col gap-y-[1rem] items-center relative top-[5rem]'>
                <motion.h1
                    className='text-black text-center text-[28px] font-extralight'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.5, delay: 0.5}}
                >Cliente creado con éxito!</motion.h1>
                <motion.button className='bg-[#2756a8] text-[14px] w-fit h-fit p-[0.3rem]
                    pl-[0.7rem] pr-[0.7rem] rounded-xl'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.5, delay: 1.3}}
                    onClick={()=> {
                        setFormAnimation('reset')
                        setFormAnimation('blank')
                        }}>
                    Crear uno nuevo
                </motion.button>
            </div>
            : null}
        <motion.div className="flex flex-col gap-y-[0.6rem] w-[385px] h-[480px]
            border p-[1.2rem] shadow rounded-xl"
            initial={{opacity: 0}}
            animate={formAnimation}
            exit={{opacity: 0}}
            variants={form}>
            <h1 className="text-[#2756A8] font-black text-[0.9rem]">Nuevo cliente</h1>
            <p className="text-black text-[0.9rem]">Completá el formulario para registrar un nuevo cliente</p>
            <Formik initialValues={{
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
            onSubmit={(values, {resetForm})=> {
                setFormAnimation('submitting')
                axios.post('http://localhost:3001/clients', values)
                .then(response => {
                    console.log('Cliente creado con éxito!\nresponse: ' + response)
                    setTimeout(()=>{
                        setFormAnimation('submitted')
                        resetForm()
                    }, 1500)
                })
            }}> 
                {({errors, touched, values, setFieldValue, setFieldError})=>(
                <Form className='flex flex-col gap-y-[2rem] gap-x-[2rem] overflow-hidden'>
                    <motion.div className='flex pt-[0.5rem] relative gap-x-[1rem] items-center'
                        variants={pages}
                        animate={page}
                        transition={{duration: 0.5}}>
                        <div className='flex gap-x-[1rem] w-fit h-fit'>
                            <div className='flex flex-col align-center gap-y-[1.6rem]'>
                                <div className='flex flex-col gap-y-[0.2rem] justify-start'>
                                    <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="name"
                                    >*Nombre</label>
                                    <Field className={`w-[160px] border-b border-${(errors.name && (touched.name || errors.name === 'Solo letras')) ? 'red-400' : 'gray'}
                                        outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                        id="name"
                                        name="name"
                                        type="text"
                                        onChange={(e)=>handleInputChange(e, setFieldValue, setFieldError)}
                                        maxLength={25}
                                        tabIndex="1"/>
                                    {errors.name && (touched.name || errors.name === 'Solo letras') ? 
                                        <h1 className='absolute top-[3.8rem] text-[0.8rem] text-red-500'>{errors.name}</h1>
                                        : null}
                                </div>
                                <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                                    <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="idNumber"
                                    >*DNI</label>
                                    <Field className={`w-[160px] border-b border-${(errors.idNumber && ( touched.idNumber || errors.idNumber === 'Solo números')) ? 'red-400' : 'gray'}
                                        outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                        id="idNumber"
                                        name="idNumber"
                                        type="text"
                                        onChange={(e)=>handleInputChange(e, setFieldValue, setFieldError)}
                                        maxLength={9}
                                        tabIndex="3"/>
                                    {errors.idNumber && ( touched.idNumber || errors.idNumber === 'Solo números') ?
                                        <h1 className='absolute top-[8.6rem] text-[0.8rem] text-red-500'>{errors.idNumber}</h1>
                                    : null}
                                </div>
                                <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                                    <label className={`text-${fontColor} text-[0.95rem] font-${fontWidth}`} htmlFor="birthDate"
                                    >*Fecha de nacimiento</label>
                                    <Field className={`w-[160px] h-[23px] border-b border-${(errors.birthDate && touched.birthDate) ? 'red-400' : 'gray'}
                                        outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
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
                                    <Field className={`w-[160px] border-b border-${(errors.location && touched.location) ? 'red-400' : 'gray'}
                                        outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                        id="location"
                                        name="location"
                                        type="text"
                                        tabIndex="7"
                                        maxLength={40}/>
                                    {errors.location && touched.location ?
                                        <h1 className='absolute top-[18.1rem] text-[0.8rem] text-red-500'>{errors.location}</h1>
                                        : null}
                                </div>
                            </div>
                            <div className='flex flex-col align-center gap-y-[1.6rem]'>
                                <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                                    <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="surname"
                                    >*Apellido</label>
                                    <Field className={`w-[160px] border-b border-${(errors.surname && (touched.surname || errors.surname === 'Solo letras')) ? 'red-400' : 'gray'}
                                        outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                        id="surname"
                                        name="surname"
                                        type="text"
                                        onChange={(e)=>handleInputChange(e, setFieldValue, setFieldError)}
                                        tabIndex="2"
                                        maxLength={25}/>
                                    {errors.surname && (touched.surname || errors.surname === 'Solo letras') ?
                                        <h1 className='absolute top-[3.8rem] text-[0.8rem] text-red-500'>{errors.surname}</h1>
                                        : null}
                                </div>
                                <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                                    <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="email"
                                    >Correo electrónico</label>
                                    <Field className={`w-[160px] border-b border-${(errors.email && touched.email) ? 'red-400' : 'gray'}
                                        outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
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
                                    >*Número de teléfono</label>
                                    <Field className={`w-[160px] border-b border-${(errors.phoneNumber && (touched.phoneNumber || errors.phoneNumber === 'Solo números')) ? 'red-400' : 'gray'}
                                        outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="text"
                                        onChange={(e)=>handleInputChange(e, setFieldValue, setFieldError)}
                                        maxLength={15}
                                        tabIndex="6"/>
                                    {errors.phoneNumber && (touched.phoneNumber || errors.phoneNumber === 'Solo números') ?
                                        <h1 className='absolute top-[13.3rem] text-[0.8rem] text-red-500'>{errors.phoneNumber}</h1>
                                        : null}
                                </div>
                                <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                                    <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="zipCode"
                                    >Código postal</label>
                                    <Field className={`w-[160px] border-b border-${(errors.zipCode && touched.zipCode) ? 'red-400' : 'gray'}
                                        outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                        id="zipCode"
                                        name="zipCode"
                                        type="text"
                                        tabIndex="8"
                                        maxLength={10}/>
                                    {errors.zipCode && touched.zipCode ?
                                        <h1 className='absolute top-[18.1rem] text-[0.8rem] text-red-500'>{errors.zipCode}</h1>
                                        : null}
                                </div>
                            </div>
                        </div>
                        <div className='flex w-fit h-fit gap-x-[1rem]'>
                            <div className='flex flex-col align-center gap-y-[1.6rem]'>
                                <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                                    <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="occupation"
                                    >Ocupación</label>
                                    <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} mb-[0.4rem] bg-transparent`}
                                        id="occupation"
                                        name="occupation"
                                        type="text"
                                        maxLength={60}
                                        tabIndex="9"/>
                                    {errors.occupation && touched.occupation ?
                                        <h1 className='absolute top-[5.6rem] text-[0.8rem] text-red-500'>{errors.occupation}</h1> 
                                        : null}  
                                </div>
                                <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                                    <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="healthInsurance"
                                    >Obra social <strong>(VER)</strong></label>
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
                                        maxLength={40}
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
                                        maxLength={40}
                                        tabIndex="10"/>
                                    <h1 className='absolute top-[5.6rem] text-[0.8rem] text-red-500'>{errors.neighborhood}</h1>
                                </div>
                                <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                                    <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="cuit"
                                    >CUIT</label>
                                    <Field className={`w-[160px] border-b border-${(errors.cuit && (touched.cuit || errors.cuit === 'Solo números')) ? 'red-400' : 'gray'}
                                        outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} mb-[0.4rem] bg-transparent`}
                                        id="cuit"
                                        name="cuit"
                                        type="text"
                                        onChange={(e)=>handleInputChange(e, setFieldValue, setFieldError)}
                                        maxLength={16}
                                        tabIndex="12"/>
                                    {errors.cuit && (touched.cuit || errors.cuit === 'Solo números')}
                                    <h1 className='absolute w-[160px] top-[10.8rem] text-[0.8rem] text-red-500'>{errors.cuit}</h1> 
                                </div>
                                <div className='flex flex-col gap-y-[0.2rem] items-baseline'>
                                    <label className={`text-${fontColor} text-[1rem] font-${fontWidth}`} htmlFor="iva"
                                    >IVA</label>
                                    <Field className={`w-[160px] border-b outline-0 text-${textColor} text-[0.9rem] font-${fontWidth} bg-transparent`}
                                        id="iva"
                                        name="iva"
                                        type="text"
                                        maxLength={50}
                                        tabIndex="14"/>
                                    <h1 className='absolute top-[15.9rem] text-[0.8rem] text-red-500'>{errors.iva}</h1> 
                                </div>
                            </div>  
                        </div>
                    </motion.div>
                    {formAnimation === 'blank' ?
                        <div className='flex h-[100%] justify-between'>
                            {(Object.keys(errors)) &&
                                (values.name !== '' && values.surname !== '' && values.idNumber !== ''
                                && values.birthDate !== '' && values.phoneNumber !== '') ?
                                toSubmit = true : toSubmit = false}
                            <motion.label
                                className='border text-center w-[60px] h-fit bg-[#2756A8] rounded-full p-[0.2rem] pl-[0.4rem] pr-[0.4rem] text-white text-[0.8rem] cursor-pointer'
                                variants={button}
                                initial='hidden'
                                animate={page === 'last' ? 'visible' : 'hidden'}
                                transition={{duration: 0.1}}
                                onClick={()=> setPage('first')}
                                >Volver</motion.label>
                                <motion.button
                                    className={`border w-fit h-fit bg-[#2756A8] rounded-full p-[0.2rem] pl-[0.4rem] pr-[0.4rem] text-white text-[0.9rem] ${toSubmit ? 'cursor-pointer' : 'cursor-default'}`}
                                    type='submit'
                                    disabled={!toSubmit}
                                    initial={{filter: 'grayscale(100%)'}}
                                    animate={ toSubmit ? {filter: 'grayscale(0%)'} : {filter: 'grayscale(100%)'}}
                                    style={{background: 'linear-gradient(55deg, #2756a8, #e21744)'}}
                                    transition={{duration: 0.5}}
                                >CREAR</motion.button>
                            <motion.label
                                className='border text-center w-[60px] h-fit bg-[#2756A8] rounded-full p-[0.2rem] pl-[0.4rem] pr-[0.4rem] text-white text-[0.8rem] cursor-pointer'
                                variants={button}
                                animate={page === 'first'? 'visible' : 'hidden'}
                                transition={{duration: 0.5}}
                                onClick={()=> setPage('last')}
                                >Más</motion.label>
                        </div> :
                        <div className='flex justify-center'>
                            <BarLoader loading={ formAnimation === 'submitting' ? true : false}/>
                        </div>
                    }
                </Form>)}
            </Formik>
        </motion.div>
    </div>
}