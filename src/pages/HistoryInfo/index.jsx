import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs";
import img from "../../assets/images/slider-product-detail.jpg";

export default function HistoryInfo() {
  const dispatch = useDispatch();
  const { ordersInfo, totalPrice } = useSelector((state) => state.historyInfo);
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={styles.history_info}>
      <div className="container">
        <Breadcrumbs current={"История закакзов"} />
        <h1 className={styles.history_info_title}>Заказ 100002 / Доставлено</h1>
        <div className={styles.history_info__list}>
          {ordersInfo.map((item) => {
            return (
              <div className={styles.history_info__list_item}>
                <img src={img} alt="" />
                <div className={styles.history_info__list_item_info}>
                  <h3 className={styles.history_info__list_item_info_title}>
                    Платье с сетчатами рукавами
                  </h3>
                  <p className={styles.history_info__list_item_info_article}>
                    <span>Артикул:</span>PL984/dakota
                  </p>
                  <p className={styles.history_info__list_item_info_size}>
                    <span>Размер:</span>42-55
                  </p>
                  <p className={styles.history_info__list_item_info_color}>
                    <span>Цвет:</span>Бежевый
                  </p>
                  <p className={styles.history_info__list_item_info_quantity}>
                    <span>Количество линеек:</span>12
                  </p>
                </div>
                <div className={styles.history_info_list_price}>
                  <p>7229 с.</p>
                  <sub>9229 с.</sub>
                </div>
              </div>
            );
          })}
          <div className={styles.history_info_address}>
            <div>
              <p>Получатель:</p>
              <div>
                <p>
                  {user.first_name} {user.last_name}{" "}
                </p>
                <p>{user.phone}</p>
              </div>
            </div>
            <div>
              <p>Адрес доставки:</p>
              <div>
                <p>
                  {user.country} {user.city}
                </p>
              </div>
            </div>
            <div>
              <p>К оплате:</p>
              <div>
                <p>2900000 c.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
