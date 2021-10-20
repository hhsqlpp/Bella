import React from 'react'
import { Breadcrumbs, Card, Pagination } from '../../components'

import styles from './styles.module.scss'

const Favorites = () => {
  return (
    <div className={styles.favorites}>
      <div className="container">
        <Breadcrumbs current={"Изобранное"} />
        <div className={styles.favorites__header}>
          <h1>Изобранное</h1>
          <div className={styles.sort}>
            <div className={styles.sort__label}>Сортировать по
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4243 1.92426C11.6586 1.68995 11.6586 1.31005 11.4243 1.07574C11.1899 0.841421 10.8101 0.841421 10.5757 1.07574L11.4243 1.92426ZM6 6.5L5.57574 6.92426C5.81005 7.15858 6.18995 7.15858 6.42426 6.92426L6 6.5ZM1.42426 1.07574C1.18995 0.841421 0.810051 0.841421 0.575736 1.07574C0.341421 1.31005 0.341421 1.68995 0.575736 1.92426L1.42426 1.07574ZM10.5757 1.07574L5.57574 6.07574L6.42426 6.92426L11.4243 1.92426L10.5757 1.07574ZM6.42426 6.07574L1.42426 1.07574L0.575736 1.92426L5.57574 6.92426L6.42426 6.07574Z" fill="#7C7C7C" />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.favorites__list}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Pagination />
      </div>
    </div >
  )
}

export default Favorites