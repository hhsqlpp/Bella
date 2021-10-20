import React from "react";
import banner from "../../assets/images/product-order.jpg";
import styles from "./styles.module.scss";

const ProductOrder = ({ data }) => {
  return (
    <div className={styles.product__order}>
      <div className={styles.product__order__image}>
        <img src={banner} alt="Banner" />
      </div>
      <div className={styles.product__order__info}>
        <div className={styles.product__order__info__remove}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.1049 10.0008L19.7712 1.33445C20.0763 1.02933 20.0763 0.534648 19.7712 0.22957C19.4661 -0.0755077 18.9714 -0.0755468 18.6663 0.22957L9.99999 8.89589L1.33372 0.22957C1.0286 -0.0755468 0.533915 -0.0755468 0.228837 0.22957C-0.0762401 0.534687 -0.0762792 1.02937 0.228837 1.33445L8.89511 10.0007L0.228837 18.667C-0.0762792 18.9722 -0.0762792 19.4668 0.228837 19.7719C0.381376 19.9245 0.581337 20.0007 0.781297 20.0007C0.981258 20.0007 1.18118 19.9245 1.33376 19.7719L9.99999 11.1056L18.6663 19.7719C18.8188 19.9245 19.0188 20.0007 19.2187 20.0007C19.4187 20.0007 19.6186 19.9245 19.7712 19.7719C20.0763 19.4668 20.0763 18.9721 19.7712 18.667L11.1049 10.0008Z"
              fill="#FF6565"
            />
          </svg>
        </div>
        <span className={styles.product__order__info__title}>
          Платье с сетчатами рукавами
        </span>
        <div className={styles.product__order__info__props}>
          Артикул:
          <span>PL984/dakota</span>
        </div>
        <div className={styles.product__order__info__props}>
          Размер:
          <span>42-55</span>
        </div>
        <div className={styles.product__order__info__props}>
          Цвет:
          <span>Бежевый</span>
        </div>
        <div className={styles.product__order__info__props}>
          Количество товаров в линейке
          <span>6 ед</span>
        </div>
        <div className={styles.product__order__info__props}>
          Количество линеек
          <div className={styles.product__order__info__props__count}>
            <div className={styles.product__order__info__props__count__dec}>
              <svg
                width="12"
                height="2"
                viewBox="0 0 12 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0H0V2H12V0Z" fill="white" />
              </svg>
            </div>
            <div className={styles.product__order__info__props__count__result}>
              20
            </div>
            <div className={styles.product__order__info__props__count__inc}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.14625 5.13267H0V6.86733H5.14625V12H6.87747V6.86733H12V5.13267H6.87747V0H5.14625V5.13267Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.product__order__info__prices}>
          <p>7229 с.</p>
          <span>7229 с.</span>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
