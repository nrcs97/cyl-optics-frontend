import * as Yup from 'yup'

// export const userSchema = yup.object().shape({
//     name: yup.string().min(3).max(15)
// })

const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Al menos 2 caracteres'),
    // surname: Yup,
    // location: Yup,
    // zipCode: Yup,
    // birthDate: Yup,
    // phoneNumber: Yup,
    // email: Yup,
    // idNumber: Yup,
    // occupation: Yup,
    // neighborhood: Yup,
    // healthInsurance: Yup,
    // address: Yup,
    // cuit: Yup,
    // iva: Yup
})

export default validationSchema