import React from "react";
import classNames from "classnames";
import { Button } from "../";
import subscribeFormImage from "../../assets/images/subscribeFormImage.jpg";

import styles from "./styles.module.scss";

const categories = ["Платья", "Верхняя одежда", "Пальто", "Туники"];

function SubscribeForm() {
  const [openCategory, setOpenCategory] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState(null);
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeError, setActiveError] = React.useState(null);
  const errors = [
    "Не заполнены обязательные поля",
    "Введен неправильный номер",
  ];
  const [formData, setFormData] = React.useState({
    fullname: "",
    tel: null,
    category: null,
  });
  const activeLabel = categories[activeCategory];

  const onClickCategoryItem = (index) => {
    setActiveCategory(index);
    setOpenCategory(false);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      category: categories[activeCategory],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.fullname && formData.tel) {
      setVisiblePopup(true);
    } else {
      setActiveError(0);
    }
  };

  const handleClosePopup = () => {
    setVisiblePopup(false);
    setFormData({
      fullname: "",
      tel: "",
      category: null,
    });
    setActiveCategory(null);
  };

  return (
    <section className={styles.subscribeForm}>
      <div className="container">
        <div className={styles.subscribeForm__content}>
          <div className={styles.subscribeForm__content__image}>
            <img src={subscribeFormImage} alt="" />
          </div>
          <div className={styles.subscribeForm__content__info}>
            <h3>Оформите подписку</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, id
              feugiat nec in sed eget. Turpis purus, sollicitudin quis augue
              consectetur lectus pharetra in ullamcorper. Sapien tortor, nunc
              venenatis aliquam accumsan, arcu, nibh adipiscing mattis. Bibendum
              ornare at porta sed eget ullamcorper porttitor faucibus tellus.
              Elit ullamcorper lorem in mauris.
            </p>
            <form
              onSubmit={handleSubmit}
              className={
                (styles.subscribeForm__content__info__form, styles.form)
              }
            >
              <input
                type="text"
                onChange={(event) => handleChange(event)}
                name="fullname"
                value={formData.fullname}
                className={
                  (styles.subscribeForm__content__info__form__field,
                  styles.field)
                }
                placeholder="Ваше Ф.И.О."
              />
              <input
                type="tel"
                onChange={(event) => handleChange(event)}
                name="tel"
                value={formData.tel}
                className={
                  (styles.subscribeForm__content__info__form__field,
                  styles.field)
                }
                placeholder="WhatsApp номер"
              />
              <div className="subscribeForm__content-info-form-dropdown dropdown">
                <div
                  onClick={() => setOpenCategory(!openCategory)}
                  className={classNames(
                    styles.subscribeForm__content__info__form__dropdown__input,
                    styles.dropdown__field,
                    {
                      active: openCategory,
                      activeLabel: activeLabel !== "",
                    }
                  )}
                >
                  {activeCategory !== null ? activeLabel : "Выбор категории"}
                  <svg
                    className={classNames(styles.arrow, {
                      activeSvg: openCategory,
                    })}
                    width="14"
                    height="7"
                    viewBox="0 0 14 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.45841 6.82618L13.8103 1.01266C14.0632 0.780896 14.0632 0.405589 13.8103 0.173824C13.557 -0.0579413 13.1466 -0.0579413 12.8936 0.173824L6.99999 5.56792L1.10639 0.173823C0.853393 -0.0579418 0.442908 -0.0579418 0.189913 0.173823C0.0633049 0.289706 -1.92931e-08 0.441373 -2.59315e-08 0.593242C-3.25699e-08 0.745111 0.0633049 0.896778 0.189913 1.01266L6.54172 6.82618C6.79493 7.05794 7.20545 7.05794 7.45841 6.82618Z"
                      fill="#AB844A"
                    />
                  </svg>
                </div>
                {openCategory && (
                  <ul
                    className={
                      (styles.subscribeForm__content__info__form__dropdown__list,
                      styles.dropdown__list)
                    }
                  >
                    {categories.map((el, index) => {
                      return (
                        <li
                          className={classNames({
                            active: activeCategory === index,
                          })}
                          onClick={() => onClickCategoryItem(index)}
                          key={`${index}.${el}`}
                        >
                          {el}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              <Button black center submit width={376}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0)">
                    <path
                      d="M8.00933 2C4.85414 2 2.28711 4.59184 2.28711 7.77778V10.5926H3.39823V7.77778C3.39823 5.20462 5.46677 3.11112 8.00936 3.11112C10.552 3.11112 12.6205 5.20447 12.6205 7.77778V10.5926H13.7316V7.77778C13.7315 4.59203 11.1645 2 8.00933 2Z"
                      fill="#AB844A"
                    />
                    <path
                      d="M10.6942 6.59253C10.3874 6.59253 10.1387 6.84125 10.1387 7.14809V8.68512C10.1387 8.99196 10.3874 9.24068 10.6942 9.24068C11.0011 9.24068 11.2498 8.99215 11.2498 8.68512V7.14809C11.2498 6.84125 11.0011 6.59253 10.6942 6.59253Z"
                      fill="#AB844A"
                    />
                    <path
                      d="M14.1944 10.0371H1.80556C1.49872 10.0371 1.25 10.2858 1.25 10.5927V13.1853C1.25 13.4921 1.49869 13.7408 1.80556 13.7408H14.1944C14.5015 13.7408 14.75 13.4921 14.75 13.1853V10.5927C14.75 10.2858 14.5013 10.0371 14.1944 10.0371ZM13.6389 12.6297H2.36112V11.1482H13.6389V12.6297H13.6389Z"
                      fill="#AB844A"
                    />
                    <path
                      d="M9.101 13.1853V13.7964C9.101 14.399 8.611 14.889 8.00841 14.889C7.40581 14.889 6.91581 14.399 6.91581 13.7964V13.1853H5.80469V13.7964C5.80469 15.0114 6.79322 16.0002 8.00838 16.0002C9.22354 16.0002 10.2121 15.0116 10.2121 13.7964V13.1853H9.101Z"
                      fill="#AB844A"
                    />
                    <path
                      d="M8.00897 0C6.95731 0 6.10156 0.85575 6.10156 1.90741V2.74075H7.21269V1.90741C7.21269 1.47575 7.57731 1.11109 8.00897 1.11109C8.44063 1.11109 8.80528 1.47572 8.80528 1.90741V2.72222H9.91641V1.90741C9.91638 0.85575 9.06084 0 8.00897 0Z"
                      fill="#AB844A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Подписаться
              </Button>
              <span className={styles.form__errors}>{errors[activeError]}</span>
            </form>
          </div>
        </div>
      </div>
      <div
        className={classNames(styles.overlay, {
          active: visiblePopup,
        })}
      ></div>
      <div
        className={classNames(styles.popup__message, {
          active: visiblePopup,
        })}
      >
        <svg
          className={styles.popup__message__logo}
          width="113"
          height="20"
          viewBox="0 0 113 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.9611 9.61268C15.1508 9.94131 16.0605 10.5282 16.6904 11.3732C17.3435 12.2183 17.6701 13.2864 17.6701 14.5775C17.6701 16.3146 16.9936 17.6526 15.6407 18.5916C14.311 19.5305 12.3632 20 9.79728 20H0V0H9.23743C11.5934 0 13.4129 0.469485 14.6959 1.40845C15.9789 2.32395 16.6204 3.57981 16.6204 5.17606C16.6204 6.20892 16.3871 7.10094 15.9206 7.85211C15.454 8.60329 14.8009 9.19014 13.9611 9.61268ZM3.39406 2.60563V8.59155H8.88753C10.2638 8.59155 11.3252 8.33333 12.0716 7.8169C12.8414 7.30047 13.2263 6.56103 13.2263 5.59859C13.2263 4.61268 12.8531 3.87324 12.1066 3.38028C11.3602 2.86385 10.2871 2.60563 8.88753 2.60563H3.39406ZM9.62233 17.3944C12.7015 17.3944 14.241 16.3615 14.241 14.2958C14.241 12.23 12.7015 11.1972 9.62233 11.1972H3.39406V17.3944H9.62233Z"
            fill="#2B2A2A"
          />
          <path
            d="M41.6228 17.1479V20H26.717V0H41.238V2.8169H30.111V8.4507H40.0133V11.2324H30.111V17.1479H41.6228Z"
            fill="#2B2A2A"
          />
          <path
            d="M50.8712 0H54.2653V17.1479H64.9373V20H50.8712V0Z"
            fill="#2B2A2A"
          />
          <path
            d="M72.8044 0H76.1984V17.1479H86.8705V20H72.8044V0Z"
            fill="#2B2A2A"
          />
          <path
            d="M107.507 15.2465H96.8345L94.7351 20H91.411L100.508 0H103.868L113 20H109.571L107.507 15.2465ZM106.317 12.5352L102.188 3.09859L98.0242 12.5352H106.317Z"
            fill="#2B2A2A"
          />
        </svg>
        <p>Спасибо что подписались!</p>
        <Button onClick={handleClosePopup} black center width={344}>
          Хорошо
        </Button>
      </div>
    </section>
  );
}

export default SubscribeForm;
