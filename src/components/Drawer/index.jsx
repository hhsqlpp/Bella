import React, { useState } from "react";
import { DrawerProduct, DrawerEmpty, Button } from "../";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { useSelector } from "react-redux";

const Drawer = ({ active, handleVisibleDrawer, handleClickbyOverlay }) => {
  const [items, setItems] = React.useState(true);
  const { products, loading } = useSelector((state) => state.order);

  return (
    <div
      className={classNames(styles.drawer, {
        active: active,
      })}
    >
      {products.length > 0 ? (
        <div
          className={classNames(styles.drawer, {
            active: active,
          })}
        >
          {items ? (
            <div className={styles.drawer__container}>
              <ul className={styles.drawer__list}>
                {products.map((item) => {
                  return (
                    <li>
                      <DrawerProduct data={item} />
                    </li>
                  );
                })}
              </ul>
              <div className={styles.drawer__footer}>
                <div className={styles.drawer__footer__count}>
                  Всего товаров :<span>{products.length}</span>
                </div>
                <div className={styles.drawer__footer__totalPrice}>
                  Итого :<span>12 230 c.</span>
                </div>
                <Link to="/order" onClick={handleClickbyOverlay}>
                  <Button black width={365} center>
                    Оформить заказ
                  </Button>
                </Link>
                <span>Продолжить покупки</span>
              </div>
            </div>
          ) : (
            <DrawerEmpty />
          )}
        </div>
      ) : (
        <DrawerEmpty />
      )}
    </div>
  );
};

export default Drawer;
