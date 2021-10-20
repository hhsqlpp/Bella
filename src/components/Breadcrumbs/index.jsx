import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const Breadcrumbs = ({ current }) => {
  return (
    <div className={styles.breadcrumbs}>
      <Link to="/">
        <span className={styles.breadcrumbs__link}>Главная</span>
      </Link>
      /
      <span className={styles.breadcrumbs__link__current}>{current}</span>
    </div >
  )
}



export default Breadcrumbs