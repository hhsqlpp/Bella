import React from "react";
import cardsItemPreview from "../../assets/images/cards-item-preview.jpg";
import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

function Card({ sale, favorite, freshness, title, image, sizes, price, new_price, colors }) {
  const [onFavorite, setOnFavorite] = React.useState(false);

  return (
    <div className={styles.cards__item}>
      <div className={styles.cards__item__preview}>
        {freshness && <div className={styles.cards__item__new}></div>}
        <Link to="/products/1/">
          <img
            width="250"
            height="332"
            src={cardsItemPreview}
            alt=""
            className={styles.cards__item__image}
          />
        </Link>
        <span
          onClick={() => setOnFavorite(!onFavorite)}
          className={`${styles.cards__item__favorite} ${
            onFavorite && styles.active
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.2307 2.5849C17.0741 1.4283 15.5266 0.791382 13.8729 0.791382C12.4491 0.791382 11.1043 1.26357 10.0196 2.13287C8.91941 1.26357 7.57289 0.791382 6.16305 0.791382C4.50164 0.791382 2.95008 1.42857 1.79352 2.5849C0.636914 3.74126 0 5.289 0 6.94248C0 8.59619 0.636914 10.1437 1.79352 11.3L9.49137 18.9979C9.63164 19.1384 9.81582 19.2086 10 19.2086C10.1837 19.2086 10.3674 19.1386 10.5079 18.9988L18.212 11.3182C19.3652 10.1391 20 8.58947 20 6.95447C20 5.30435 19.3736 3.7547 18.2307 2.5849ZM17.1897 10.3055L10.0007 17.4724L2.81078 10.2828C1.92613 9.39787 1.43883 8.21154 1.43883 6.94248C1.43883 5.67341 1.92613 4.48709 2.81078 3.6022C3.69566 2.71755 4.88609 2.23025 6.16305 2.23025C7.41965 2.23025 8.61246 2.7197 9.52109 3.60794C9.80262 3.88349 10.2542 3.88107 10.5326 3.6022C11.4175 2.71755 12.6036 2.23025 13.8729 2.23025C15.1422 2.23025 16.3283 2.71755 17.2072 3.59642C18.0803 4.4897 18.5611 5.68228 18.5611 6.95447C18.5611 8.2113 18.072 9.40384 17.1897 10.3055Z"
              fill="#AB844A"
            />
          </svg>
        </span>
        <div className={styles.cards__item__cart}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.624 13.3557L13.8334 5.67842C13.8008 5.36007 13.5326 5.1181 13.2126 5.1181H2.80945C2.49029 5.1181 2.22229 5.35926 2.18879 5.67676L1.37691 13.3578C1.30991 14.0282 1.53338 14.7019 1.98985 15.2064C2.44635 15.7106 3.09385 16 3.76651 16H12.2557C12.9252 16 13.5667 15.7164 14.0148 15.2214C14.4693 14.7206 14.6913 14.0415 14.624 13.3557ZM13.0904 14.3831C12.8749 14.6207 12.5784 14.7516 12.2557 14.7516H3.76673C3.4461 14.7516 3.13588 14.612 2.91554 14.3686C2.6952 14.1251 2.58723 13.802 2.61885 13.4855L3.3712 6.3667H12.6493L13.3821 13.481C13.4154 13.8187 13.3116 14.1391 13.0904 14.3831Z"
              fill="#AB844A"
            />
            <path
              d="M8.11385 0C6.1406 0 4.53516 1.60541 4.53516 3.57869V5.74253H5.78353V3.57869C5.78353 2.29369 6.82885 1.24838 8.11385 1.24838C9.39885 1.24838 10.4444 2.29369 10.4444 3.57869V5.74253H11.6925V3.57869C11.6925 1.60541 10.0871 0 8.11385 0Z"
              fill="#AB844A"
            />
          </svg>
          Добавить в корзину
        </div>
      </div>
      <div className={styles.cards__item__info}>
        <div className={styles.cards__item__prices}>
          <span className={styles.cards__item__prices__before}>{price} c.</span>
          <span className={styles.cards__item__prices__after}>{new_price} c.</span>
        </div>
        {sale && <div className={styles.cards__item__sale}>{sale}%</div>}
        <span className={styles.cards__item__name}>
          {title}
        </span>
        <div className={styles.cards__item__sizes}>Размеры: {
          sizes && sizes.map(size => size.name)
        }</div>
        <div className={styles.cards__item__colors}>
          {
            colors && colors.map(color => {
              return <span key={color.id} className={styles.cards__item__colors__item}></span>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Card;
