import * as Yup from 'yup'

export const name = Yup.string()
    .required('Por favor ingrese su nombre')
    .min(2, 'Por favor ingrese un nombre valido')
    .max(30, 'Porfavor ingrese un nombre valido')

export const last_name = Yup.string()
    .required('Por favor ingrese su apellido')
    .min(2, 'Por favor ingrese un apellido valido')
    .max(30, 'Porfavor ingrese un apillido valido')

export const birthday = Yup.string()
    .required('Por favor ingrese su fecha de nacimiento')