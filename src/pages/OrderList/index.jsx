import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Breadcrumbs, OrderListItem, Pagination } from "../../components";
import setHistoryInfo from "../../redux/actions/historyInfo";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const OrderList = () => {
  const { orders } = useSelector((state) => state.history);
  const dispatch = useDispatch();

  const setOrderInfo = (data, price) => {
    dispatch(setHistoryInfo(data, price));
  };

  return (
    <div className={styles.order__list}>
      <div className="container">
        <div className={styles.order__list__container}>
          <div className="breadcrumbs">
            <Breadcrumbs current={"Мои заказы"} />
          </div>
          <h3>Мои заказы</h3>
          <ul className={styles.order__list__items}>
            {orders.map((item) => {
              return (
                <li
                  className={styles.order__list__items__item}
                  onClick={() => setOrderInfo(item, 10000)}
                >
                  <OrderListItem data={item} />
                </li>
              );
            })}
          </ul>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
