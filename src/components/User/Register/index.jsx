import React from 'react'
import {registerFormSchema} from "../../../utils/schemas/authValidation";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from 'react-redux'
import {register} from '../../../redux/actions/auth'


import { Button } from '../../index'


import styles from './styles.module.scss'
import classNames from "classnames";

const Register = () => {
  const form = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(registerFormSchema)
  })
  const dispatch = useDispatch()
  const error = useSelector(({auth}) => auth.error)

  const onSubmit = (data) => {
    dispatch(register(data))
  }

  return (
    <div className={styles.modal__content}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.modal__form}>
        <span className={styles.modal__form__title}>Регистрация</span>
        <div className={styles.modal__form__group}>
          <label htmlFor="first-name">{form.formState.errors.phone?.message ? form.formState.errors.phone?.message : 'Номер телефона'}</label>
          <input {...form.register('phone')} type="text" id="phone" className={classNames(styles.modal__form__field, {
            'error': !!form.formState.errors.phone?.message
          })} placeholder="Номер Телефона" required />
        </div>
        <div className={styles.modal__form__group}>
          <label htmlFor="first_name">{form.formState.errors.first_name?.message ? form.formState.errors.phone?.message : 'Имя'}</label>
          <input {...form.register('first_name')} type="text" id="first_name" className={classNames(styles.modal__form__field, {
            'error': !!form.formState.errors.first_name?.message
          })} placeholder="Имя" required />
        </div>
        <div className={styles.modal__form__group}>
          <label htmlFor="last_name">{form.formState.errors.last_name?.message ? form.formState.errors.phone?.message : 'Ваше Фамилия'}</label>
          <input {...form.register('last_name')} type="text" id="last_name" className={classNames(styles.modal__form__field, {
            'error': !!form.formState.errors.last_name?.message
          })} placeholder="Фамилия" required />
        </div>
        <div className={styles.modal__form__group}>
          <label className={form.formState.errors.password?.message && 'error'} htmlFor="last_name">{form.formState.errors.password?.message ? form.formState.errors.password?.message : 'Введите пароль'}</label>
          <input {...form.register('password')} type="password" id="password" className={classNames(styles.modal__form__field, {
            'error': !!form.formState.errors.password?.message
          })} placeholder="Пароль" required />
        </div>
        <div className={styles.modal__form__group}>
          <label className={form.formState.errors.password2?.message && 'error'} htmlFor="password2">{form.formState.errors.password2?.message ? form.formState.errors.password2?.message : 'Подтвердите пароль'}</label>
          <input {...form.register('password2')} type="password" id="password2" className={classNames(styles.modal__form__field, {
            'error': !!form.formState.errors.password2?.message
          })} placeholder="Подтвердите пароль" required />
        </div>
        <div className={styles.modal__form__condition}>
          <div className={styles.modal__form__condition__checkbox}>
              <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8653 1.14453C12.6811 0.956469 12.3772 0.951255 12.1866 1.13288C12.1826 1.13668 12.1786 1.14056 12.1747 1.14453L4.3541 8.85733L1.81346 6.35173C1.62277 6.17011 1.31891 6.17532 1.13475 6.36338C0.955084 6.54683 0.955084 6.83766 1.13475 7.02111L4.01475 9.86139C4.2022 10.0462 4.50603 10.0462 4.69346 9.86139L12.8535 1.81391C13.0441 1.63226 13.0494 1.33258 12.8653 1.14453Z" fill="#2B2A2A" stroke="#2B2A2A" stroke-width="0.3" />
              </svg>
          </div>
          <span className={styles.modal__form__condition__title}>Согласен с условиями публичной оферты </span>
        </div>
        <Button submit black center width={344}>Продолжить</Button>
        {
          error && <p className={styles.modal__form__error}>{error}</p>
        }
      </form>
    </div>
  )
}

export default Register