import classNames from 'classnames'
import React from 'react'
import { Button } from '../../index'


import styles from './styles.module.scss'


const LoginConfirm = ({ onRedirectBase }) => {
  const [confirmCode, setComfirmCode] = React.useState('')
  const [time, setTime] = React.useState(5)
  const [finishTime, setFinishTime] = React.useState(false)
  let updateSec = time

  const onSubmit = (event) => {
    const code = parseInt(confirmCode)
    event.preventDefault();
    onRedirectBase()
  }

  const startWatch = () => {
    if (time > 0) {
      const interval = setInterval(() => {
        if (updateSec === 0) {
          clearInterval(interval)
          setFinishTime(true)
        } else {
          updateSec--;
        }
        setTime(updateSec)
      }, 600)
    }
  }

  React.useEffect(() => {
    startWatch()
  }, [])


  return (
    <div className={styles.modal__content}>
      <form onSubmit={onSubmit} className={styles.modal__form}>
        <span className={styles.modal__form__title}>Вход</span>
        <input type="text" className={styles.modal__form__field} onChange={(event) => setComfirmCode(event.target.value)} placeholder="Введите код подтверждения" />
        <Button submit width={344} black center>Продолжить</Button>
        <span className={styles.modal__form__help}>Не пришло SMS сообщение?</span>
        <Button reset resetFinish={finishTime}>
          <span>Отправить снова</span> {!finishTime && <span>0:{(time >= 10) ? time : "0" + time}</span>}
        </Button>
           <span className={styles.modal__form__error}>Неправильный код подтверждения</span>
      </form>
    </div>
  )
}

export default LoginConfirm