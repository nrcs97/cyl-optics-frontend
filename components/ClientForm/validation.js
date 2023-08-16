import * as Yup from 'yup'

// export const userSchema = yup.object().shape({
//     name: yup.string().min(3).max(15)
// })

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Al menos 2 caracteres').required('Campo obligatorio'),
    surname: Yup.string().min(3, 'Al menos 2 caracteres').required('Campo obligatorio'),
    // location: Yup,
    // zipCode: Yup,
    birthDate: Yup.string().required('Campo obligatorio'),
    phoneNumber: Yup.string().required('Campo obligatorio'),
    // email: Yup,
    idNumber: Yup.string().required('Campo obligatorio'),
    // occupation: Yup,
    // neighborhood: Yup,
    // healthInsurance: Yup,
    // address: Yup,
    // cuit: Yup,
    // iva: Yup
})

export default validationSchema