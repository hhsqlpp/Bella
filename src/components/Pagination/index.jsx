import classNames from 'classnames'
import React from 'react'

import styles from './styles.module.scss'

const Pagination = ({itemsPerPage, totalItems, paginate, currentPage, nextPage, prevPage}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i)
  }

  return (
    <div className={styles.pagination}>
      <ul>
        <li onClick={prevPage} className={styles.pagination__prev}>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 11L1 6L6 1" stroke="#7C7C7C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 11L1 6L6 1" stroke="#7C7C7C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
        {
          pageNumbers.map(number => (
              <li onClick={() => paginate(number)} className={classNames({
                'active': number === currentPage
              })} key={number}>{number}</li>
          ))
        }
        <li onClick={nextPage} className={styles.pagination__next}>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 11L1 6L6 1" stroke="#7C7C7C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 11L1 6L6 1" stroke="#7C7C7C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
      </ul>
    </div>
  )
}

export default Pagination