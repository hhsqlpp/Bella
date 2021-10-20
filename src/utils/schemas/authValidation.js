import * as yup from 'yup'

const phoneValid = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const loginFormSchema = yup.object().shape({
    phone: yup.string().min(4, 'Номер телефона должен быть более 4 цифр').required('Номер телефона обязателен'),
    password: yup.string().min(6, 'Пароль должен быть более 6 символов').required('Пароль обязательный')
})

export const registerFormSchema = yup.object().shape({
    phone: yup.string().min(4, 'Номер телефона должен быть более 4 цифр').max(15, 'Номер телефона не должен быть не более 15 цифр').required('Номер телефона обязателен'),
    first_name: yup.string().required('Поля Имя обязателен'),
    last_name: yup.string().required('Поле Фамилия обязателен'),
    password: yup.string().min(6, 'Пароль должен быть более 6 символов').required('Пароль обязательный'),
    password2: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают').required('Не введен подтверждающий пароль')
})