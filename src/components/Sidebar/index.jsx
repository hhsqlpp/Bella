import classNames from 'classnames'
import React from 'react'
import { Breadcrumbs } from '../../components'

import styles from './styles.module.scss'

const Sidebar = () => {
  const [categoryItem, setCategoryItem] = React.useState('')
  const [visibleCategory, setVisibleCategory] = React.useState(false)
  const categories = [
    {
      'Верхняя одежда': [
        'Верхняя одежда',
        'Верхняя одежда',
        'Верхняя одежда',
      ]
    },
    {
      'Платья': [
        'Платья',
        'Платья',
        'Платья',
        'Платья',
      ]
    },
    {
      'Туники': [
        'Туники',
        'Туники',
        'Туники',
      ]
    },
    {
      'Футболки': [
        'Футболки',
        'Футболки',
        'Футболки',
      ]
    },
    { 'Шорты': 'Шорты' },
    { 'Юбки': 'Юбки' },
    { 'Вечерние платья': 'Вечерние платья' },
    { 'Пижамы': 'Вечерние платья' },
  ]
  const onClickCategoryItem = (event) => {
    setCategoryItem(event.target.id)
  }

  const handleVisibleCategory = () => {
    setVisibleCategory(!visibleCategory)
  }

  return (
    <div className={styles.sidebar}>
      <Breadcrumbs current={'Товары'} />
      <div className={classNames(styles.categories__block, {
        'active': visibleCategory,
      })}>
        <span onClick={handleVisibleCategory} className={styles.categories__block__title}>Категория <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.4243 1.92426C11.6586 1.68995 11.6586 1.31005 11.4243 1.07574C11.1899 0.841421 10.8101 0.841421 10.5757 1.07574L11.4243 1.92426ZM6 6.5L5.57574 6.92426C5.81005 7.15858 6.18995 7.15858 6.42426 6.92426L6 6.5ZM1.42426 1.07574C1.18995 0.841421 0.810051 0.841421 0.575736 1.07574C0.341421 1.31005 0.341421 1.68995 0.575736 1.92426L1.42426 1.07574ZM10.5757 1.07574L5.57574 6.07574L6.42426 6.92426L11.4243 1.92426L10.5757 1.07574ZM6.42426 6.07574L1.42426 1.07574L0.575736 1.92426L5.57574 6.92426L6.42426 6.07574Z" fill="#7C7C7C" />
        </svg>
        </span>
        <ul className={styles.filter__category}>
          <li className={styles.filter__category__item}>
            <div className={styles.filter__category__item__link}>
              <span>Верхняя одежда</span>
              <svg id="1" className={categoryItem === 1 && 'active'} onClick={(event) => onClickCategoryItem(event)} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4243 1.92426C11.6586 1.68995 11.6586 1.31005 11.4243 1.07574C11.1899 0.841421 10.8101 0.841421 10.5757 1.07574L11.4243 1.92426ZM6 6.5L5.57574 6.92426C5.81005 7.15858 6.18995 7.15858 6.42426 6.92426L6 6.5ZM1.42426 1.07574C1.18995 0.841421 0.810051 0.841421 0.575736 1.07574C0.341421 1.31005 0.341421 1.68995 0.575736 1.92426L1.42426 1.07574ZM10.5757 1.07574L5.57574 6.07574L6.42426 6.92426L11.4243 1.92426L10.5757 1.07574ZM6.42426 6.07574L1.42426 1.07574L0.575736 1.92426L5.57574 6.92426L6.42426 6.07574Z" fill="#7C7C7C" />
              </svg>
            </div>
            <ul className={classNames(styles.filter__category__inner, {
              'active': categoryItem === '1'
            })}>
              <li>
                Верхняя одежда
              </li>
              <li>
                Верхняя одежда
              </li>
              <li>
                Верхняя одежда
              </li>
              <li>
                Верхняя одежда
              </li>
            </ul>
          </li>
          <li className={styles.filter__category__item}>
            <div className={styles.filter__category__item__link}>
              <span>Платья</span>
              <svg id="2" className={categoryItem === 2 && 'active'} onClick={(event) => onClickCategoryItem(event)} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4243 1.92426C11.6586 1.68995 11.6586 1.31005 11.4243 1.07574C11.1899 0.841421 10.8101 0.841421 10.5757 1.07574L11.4243 1.92426ZM6 6.5L5.57574 6.92426C5.81005 7.15858 6.18995 7.15858 6.42426 6.92426L6 6.5ZM1.42426 1.07574C1.18995 0.841421 0.810051 0.841421 0.575736 1.07574C0.341421 1.31005 0.341421 1.68995 0.575736 1.92426L1.42426 1.07574ZM10.5757 1.07574L5.57574 6.07574L6.42426 6.92426L11.4243 1.92426L10.5757 1.07574ZM6.42426 6.07574L1.42426 1.07574L0.575736 1.92426L5.57574 6.92426L6.42426 6.07574Z" fill="#7C7C7C" />
              </svg>
            </div>
            <ul className={classNames(styles.filter__category__inner, {
              'active': categoryItem === '2'
            })}>
              <li>
                Платья
              </li>
              <li>
                Платья
              </li>
              <li>
                Платья
              </li>
              <li>
                Платья
              </li>
            </ul>
          </li>
          <li className={styles.filter__category__item}>
            <div className={styles.filter__category__item__link}>
              <span>Туники</span>
              <svg id="3" className={categoryItem === 3 && 'active'} onClick={(event) => onClickCategoryItem(event)} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4243 1.92426C11.6586 1.68995 11.6586 1.31005 11.4243 1.07574C11.1899 0.841421 10.8101 0.841421 10.5757 1.07574L11.4243 1.92426ZM6 6.5L5.57574 6.92426C5.81005 7.15858 6.18995 7.15858 6.42426 6.92426L6 6.5ZM1.42426 1.07574C1.18995 0.841421 0.810051 0.841421 0.575736 1.07574C0.341421 1.31005 0.341421 1.68995 0.575736 1.92426L1.42426 1.07574ZM10.5757 1.07574L5.57574 6.07574L6.42426 6.92426L11.4243 1.92426L10.5757 1.07574ZM6.42426 6.07574L1.42426 1.07574L0.575736 1.92426L5.57574 6.92426L6.42426 6.07574Z" fill="#7C7C7C" />
              </svg>
            </div>
            <ul className={classNames(styles.filter__category__inner, {
              'active': categoryItem === '3'
            })}>
              <li>
                Туники
              </li>
              <li>
                Туники
              </li>
              <li>
                Туники
              </li>
              <li>
                Туники
              </li>
            </ul>
          </li>
          <li className={styles.filter__category__item}>
            <div className={styles.filter__category__item__link}>
              <span> Футболки</span>
              <svg id="4" className={styles.filter__category__item__link__arrow + categoryItem === 4 && 'active'} onClick={(event) => onClickCategoryItem(event)} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4243 1.92426C11.6586 1.68995 11.6586 1.31005 11.4243 1.07574C11.1899 0.841421 10.8101 0.841421 10.5757 1.07574L11.4243 1.92426ZM6 6.5L5.57574 6.92426C5.81005 7.15858 6.18995 7.15858 6.42426 6.92426L6 6.5ZM1.42426 1.07574C1.18995 0.841421 0.810051 0.841421 0.575736 1.07574C0.341421 1.31005 0.341421 1.68995 0.575736 1.92426L1.42426 1.07574ZM10.5757 1.07574L5.57574 6.07574L6.42426 6.92426L11.4243 1.92426L10.5757 1.07574ZM6.42426 6.07574L1.42426 1.07574L0.575736 1.92426L5.57574 6.92426L6.42426 6.07574Z" fill="#7C7C7C" />
              </svg>
            </div >
            <ul className={classNames(styles.filter__category__inner, {
              'active': categoryItem === '4'
            })}>
              <li>
                Футболки
              </li>
              <li>
                Футболки
              </li>
              <li>
                Футболки
              </li>
              <li>
                Футболки
              </li>
            </ul>
          </li >
          <li className={styles.filter__category__item}>
            <span>Шорты</span>
          </li >
          <li className={styles.filter__category__item}>
            <span>Юбки</span>
          </li>
          <li className={styles.filter__category__item}>
            <span>Вечерние платья</span>
          </li>
          <li className={styles.filter__category__item}>
            <span>Пижамы</span>
          </li>
        </ul >
      </div >
    </div >
  )
}

export default Sidebar