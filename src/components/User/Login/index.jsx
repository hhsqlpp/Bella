import React from 'react'
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import {loginFormSchema} from "../../../utils/schemas/authValidation";
import { login } from '../../../redux/actions/auth'
import {useDispatch, useSelector} from "react-redux";
import {Button} from '../../'


import styles from './styles.module.scss'
import classNames from "classnames";

const Login = ({ onRedirectRegister, onRedirectConfirm }) => {
    const dispatch = useDispatch()
    const form = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(loginFormSchema)
    })
    const error = useSelector(({auth}) => auth.error)

    const onSubmitData = (data) => {
        dispatch(login(data))
    }

  return (
    <div className={styles.modal__content}>
      <form onSubmit={form.handleSubmit(onSubmitData)} className={styles.modal__form}>
        <span className={styles.modal__form__title}>Вход</span>
        <input {...form.register('phone')} type="text" className={classNames(styles.modal__form__field, {
            'error': !!form.formState.errors.phone?.message
        })} placeholder="Введите номер телефона" />
          <p className={styles.modal__form__field__error}>{form.formState.errors.phone?.message}</p>
        <input {...form.register('password')} type="password" className={classNames(styles.modal__form__field, {
            'error': !!form.formState.errors.password?.message
        })} placeholder="Введите ваш пароль" />
          <p className={styles.modal__form__field__error}>{form.formState.errors.password?.message}</p>
        <Button width={344} submit black center>Войти</Button>
        <span onClick={onRedirectRegister} className={styles.modal__form__reg}>Зарегистрироваться</span>
          {
              error && <p className={styles.modal__form__error}>{error}</p>
          }
      </form>
    </div>
  )
}

export default Login;