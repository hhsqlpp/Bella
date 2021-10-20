import React from 'react'
import { useDispatch } from 'react-redux'

import { Button } from '../../index'
import styles from './styles.module.scss'

const RegisterSuccess = ({ onRedirectBase }) => {

  const dispatch = useDispatch()

  const onFinishRegister = () => {
    dispatch({
      type: 'USER_REGISTER_FINISH_SUCCESS'
    })
    onRedirectBase()
  }

  return (
    <div className={styles.modal__content}>
      <div className={styles.modal__wrapper}>
        <p>Поздравляем! Регистрация прошла успешно!</p>
        <Button onClick={onFinishRegister} black center width={344}>Хорошо!</Button>
      </div>
    </div>
  )
}

export default RegisterSuccess