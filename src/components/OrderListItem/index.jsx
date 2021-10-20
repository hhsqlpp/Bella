import React from "react";
import banner1 from "../../assets/images/order-list-1.jpg";
import banner2 from "../../assets/images/order-list-2.jpg";
import banner3 from "../../assets/images/order-list-3.jpg";
import banner4 from "../../assets/images/order-list-4.jpg";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const OrderListItem = ({ data }) => {
  return (
    <Link to="/history-info" className={styles.item__container}>
      <div className={styles.item__info}>
        <span className={styles.item__info__number}>Заказ №2032e231w</span>
        <span className={styles.item__info__status}>Доставлен</span>
      </div>
      <span className={styles.item__info__date}>24/03/2020</span>
      <span className={styles.item__info__price}>229000 c.</span>
      <ul>
        <li>
          <img src={banner1} alt="Banner 1" />
        </li>
        <li>
          <img src={banner2} alt="Banner 2" />
        </li>
        <li>
          <img src={banner3} alt="Banner 3" />
        </li>
        <li>
          <img src={banner4} alt="Banner 4" />
        </li>
        <li>
          <div className={styles.item__info__more}>+10</div>
        </li>
      </ul>
    </Link>
  );
};

export default OrderListItem;
