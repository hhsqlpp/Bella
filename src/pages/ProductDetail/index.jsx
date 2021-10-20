import React, { useEffect } from "react";
import { CardSlider, Breadcrumbs, Button, ProductItem } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderItem from "../../assets/images/slider-product-detail.jpg";
import banner from "../../assets/images/banner-product-detail.jpg";
import styles from "./styles.module.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import SwiperCore, { Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import fetchProductInfo from "../../redux/actions/productInfo";
import { fetchSetOrder } from "../../redux/actions/order";
import fetchSimilar from "../../redux/actions/similar";
SwiperCore.use([Navigation]);

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { productInfo } = useSelector((state) => state.productInfo);
  const { products, loading } = useSelector((state) => state.similar);
  const { country, city } = useSelector(({ auth }) => auth.user);
  const { id } = useParams();
  const addressUser = `${country}, ${city}`;
  useEffect(() => {
    dispatch(fetchProductInfo(id));
  }, []);

  useEffect(() => {
    dispatch(fetchSimilar(id));
  }, [id]);

  const addToCart = () => {
    const data = {
      address: addressUser,
      fnl_total_price: productInfo.price,
      order_products: [
        {
          product: productInfo.id,
          quantity: productInfo.quantity,
        },
      ],
    };

    dispatch(fetchSetOrder(data));
    alert("Товар успешно добавлен в корзину!");
  };

  return (
    <>
      {Object.keys(productInfo).length !== 0 ? (
        <div className={styles.product__detail}>
          <div className="container">
            <Breadcrumbs current={"Товары"} />
            <div className={styles.product__detail__container}>
              <div className={styles.product__detail__container__main}>
                <div
                  className={styles.product__detail__container__main__slider}
                >
                  <Swiper
                    navigation
                    slidesPerView={4}
                    spaceBetween={50}
                    direction={"vertical"}
                    observer={"true"}
                    breakpoints={{
                      370: {
                        // spaceBetween: 20,
                        direction: "horizontal",
                        slidesPerView: 4,
                      },
                      640: {
                        // spaceBetween: 20,
                        direction: "horizontal",
                        slidesPerView: 4,
                      },
                      768: {
                        slidesPerView: 2,
                        // spaceBetween: 20,
                        direction: "horizontal",
                      },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <img src={sliderItem} alt="Slider Item" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={sliderItem} alt="Slider Item" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={sliderItem} alt="Slider Item" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={sliderItem} alt="Slider Item" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={sliderItem} alt="Slider Item" />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={sliderItem} alt="Slider Item" />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div
                  className={styles.product__detail__container__main__wrapper}
                >
                  <div
                    className={styles.product__detail__container__main__image}
                  >
                    <img src={banner} alt="Banner" />
                  </div>
                  <div
                    className={styles.product__detail__container__main__info}
                  >
                    <h3>{productInfo.title}</h3>
                    <div
                      className={
                        styles.product__detail__container__main__info__articul
                      }
                    >
                      Артикул:
                      <span>{productInfo.article}</span>
                    </div>
                    <div
                      className={
                        styles.product__detail__container__main__info__count
                      }
                    >
                      Количество в линейке: <span>{productInfo.quantity}</span>
                    </div>
                    <div
                      className={
                        styles.product__detail__container__main__info__colors
                      }
                    >
                      <span>Цвет:</span>
                      <ul>
                        <li className={styles.active}>
                          <span className={styles.block}></span>
                        </li>
                        <li>
                          <span className={styles.block}></span>
                        </li>
                        <li>
                          <span className={styles.block}></span>
                        </li>
                        <li>
                          <span className={styles.block}></span>
                        </li>
                        <li>
                          <span className={styles.block}></span>
                        </li>
                        <li>
                          <span className={styles.block}></span>
                        </li>
                        <li>
                          <span className={styles.block}></span>
                        </li>
                      </ul>
                    </div>
                    <div
                      className={
                        styles.product__detail__container__main__info__prices
                      }
                    >
                      <span>{productInfo.price} с.</span>
                      <p>7229 с.</p>
                    </div>
                    <div
                      className={
                        styles.product__detail__container__main__info__about
                      }
                    >
                      <span>О товаре</span>
                      <p>{productInfo.description}</p>
                      <div
                        className={
                          styles.product__detail__container__main__info__about__props
                        }
                      >
                        <div
                          className={
                            styles.product__detail__container__main__info__about__props__block
                          }
                        >
                          <ul>
                            <li>
                              Размерный ряд: <span>42-50</span>
                            </li>
                            <li>
                              Длина: <span>{productInfo.length.name} См</span>
                            </li>
                          </ul>
                        </div>
                        <div
                          className={
                            styles.product__detail__container__main__info__about__props__block
                          }
                        >
                          <ul>
                            <li>
                              Состав ткани: <span>Полиэстер</span>
                            </li>
                            <li>
                              Фасон: <span>А-Силуэт</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Button black center onClick={addToCart}>
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
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.product__detail__container__all}>
                <span>Похожие товары</span>
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  navigation
                  breakpoints={{
                    370: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {!loading
                    ? products.map((item) => {
                        return (
                          <SwiperSlide key={item.id}>
                            <CardSlider title={item.title} />
                          </SwiperSlide>
                        );
                      })
                    : null}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductDetail;
