import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Breadcrumbs, ProductOrder, Button } from "../../components";
import { fetchDeleteOrder, fetchGetOrder } from "../../redux/actions/order";
import setHistory from "../../redux/actions/history";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const Order = () => {
  const { products, loading } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const day = new Date().getDay();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const { user } = useSelector((state) => state.auth);
  const [orderModal, setOrderModal] = useState(false);

  const toggleOrderModal = () => {
    setOrderModal(!orderModal);
  };

  useEffect(() => {
    dispatch(fetchGetOrder());
  }, [products.length]);

  const deleteFromCart = (id) => {
    dispatch(fetchDeleteOrder(id));
  };

  const setDelivery = () => {
    const data = [...products];

    dispatch(
      setHistory(
        data,
        `${day}/${month}/${year}`,
        Math.round(Math.random() * 100000)
      )
    );

    products.forEach((item) => {
      dispatch(fetchDeleteOrder(item.id));
    });
    toggleOrderModal();
  };

  return (
    <div className={styles.order}>
      <div className="container">
        <div className={styles.order__container}>
          <div className="breadcrumbs">
            <Breadcrumbs current={"Оформление заказа"} />
          </div>
          <div className={styles.order__content}>
            <div className={styles.order__content__main}>
              <h2>Оформление заказа</h2>
              <div className={styles.order__content__main__address}>
                <h3>Адрес доставки</h3>
                <div className={styles.order__content__main__address__info}>
                  <span>
                    {user.first_name} {user.last_name}, {user.phone}{" "}
                  </span>
                  <div
                    className={
                      styles.order__content__main__address__info__location
                    }
                  >
                    <span>{user.country}</span>
                    <span>{user.city}</span>
                  </div>
                  <Button black width={250}>
                    <Link to="/profile" style={{ color: "#fff" }}>
                      Редактировать
                    </Link>
                  </Button>
                </div>
              </div>
              <div className={styles.order__content__main__products}>
                <h4 className={styles.order__content__main__products__title}>
                  Cостав заказа
                </h4>
                <ul>
                  {!loading
                    ? products.map((item) => {
                        return (
                          <li onClick={() => deleteFromCart(item.id)}>
                            <ProductOrder />
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
            <div className={styles.order__content__count}>
              <span>Итого</span>
              <ul>
                <li>
                  Общая сумма <span>12000 с. </span>
                </li>
                <li>
                  Скидка <span>12000 с. </span>
                </li>
                <li>
                  Итог <span>10000 с. </span>
                </li>
              </ul>
              <Button black center width={344} onClick={setDelivery}>
                Оформить заказ
              </Button>
              {orderModal ? (
                <div className={styles.modal}>
                  <div className={styles.modal_dialog}></div>
                  <div className={styles.order_modal}>
                    <div>
                      <svg
                        width="138"
                        height="24"
                        viewBox="0 0 138 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.0499 11.5352C18.5027 11.9296 19.6138 12.6338 20.3829 13.6479C21.1806 14.662 21.5794 15.9437 21.5794 17.493C21.5794 19.5775 20.7533 21.1831 19.101 22.3099C17.4772 23.4366 15.0985 24 11.9648 24H0V0H11.2811C14.1584 0 16.3804 0.563382 17.9472 1.69014C19.514 2.78873 20.2975 4.29577 20.2975 6.21127C20.2975 7.4507 20.0126 8.52113 19.4428 9.42253C18.8731 10.3239 18.0754 11.0282 17.0499 11.5352ZM4.14495 3.12676V10.3099H10.8538C12.5346 10.3099 13.8308 10 14.7424 9.38028C15.6825 8.76056 16.1525 7.87324 16.1525 6.71831C16.1525 5.53521 15.6967 4.64789 14.7851 4.05634C13.8735 3.43662 12.5631 3.12676 10.8538 3.12676H4.14495ZM11.7512 20.8732C15.5115 20.8732 17.3917 19.6338 17.3917 17.1549C17.3917 14.6761 15.5115 13.4366 11.7512 13.4366H4.14495V20.8732H11.7512Z"
                          fill="#2B2A2A"
                        />
                        <path
                          d="M50.8314 20.5775V24H32.6278V0H50.3614V3.38028H36.7728V10.1408H48.8658V13.4789H36.7728V20.5775H50.8314Z"
                          fill="#2B2A2A"
                        />
                        <path
                          d="M62.1259 0H66.2709V20.5775H79.304V24H62.1259V0Z"
                          fill="#2B2A2A"
                        />
                        <path
                          d="M88.9115 0H93.0565V20.5775H106.09V24H88.9115V0Z"
                          fill="#2B2A2A"
                        />
                        <path
                          d="M131.291 18.2958H118.258L115.694 24H111.635L122.745 0H126.847L138 24H133.812L131.291 18.2958ZM129.838 15.0423L124.796 3.71831L119.711 15.0423H129.838Z"
                          fill="#2B2A2A"
                        />
                      </svg>
                    </div>
                    <p>
                      Поздравляем! Ваш заказ успешно оформлен. В ближайшее время
                      мы обязательно свяжемся с вами!
                    </p>
                    <Button black center width={344} onClick={toggleOrderModal}>
                      Хорошо
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
