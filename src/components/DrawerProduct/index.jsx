import React from "react";
import banner from "../../assets/images/slider-product-detail.jpg";

const DrawerProduct = () => {
  return (
    <div className="drawer-product">
      <div className="drawer-product-image">
        <img src={banner} alt="Banner" />
      </div>
      <div className="drawer-product-info">
        <span>Платье с сетчатыми рукавами</span>
        <div className="drawer-product-info-props">
          Размер : <span>36-35</span>
        </div>
        <div className="drawer-product-info-props">
          Цвет : <span>Бежевый</span>
        </div>
        <div className="drawer-product-info-count">
          <div className="drawer-product-info-count-dec">-</div>
          <div className="drawer-product-info-count-field">20</div>
          <div className="drawer-product-info-count-inc">+</div>
        </div>
        <div className="drawer-product-info-price">
          <p></p>
          <span>7229 с.</span>
        </div>
        <span className="drawer-product-info-delete">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.88392 8.00004L15.8169 1.06698C16.061 0.822882 16.061 0.427133 15.8169 0.18307C15.5728 -0.0609922 15.1771 -0.0610234 14.933 0.18307L7.99998 7.11613L1.06697 0.18307C0.82288 -0.0610234 0.427132 -0.0610234 0.18307 0.18307C-0.060992 0.427164 -0.0610233 0.822914 0.18307 1.06698L7.11608 8L0.18307 14.9331C-0.0610233 15.1772 -0.0610233 15.5729 0.18307 15.817C0.305101 15.939 0.465069 16 0.625037 16C0.785005 16 0.944943 15.939 1.067 15.817L7.99998 8.88394L14.933 15.817C15.055 15.939 15.215 16 15.375 16C15.5349 16 15.6949 15.939 15.8169 15.817C16.061 15.5729 16.061 15.1771 15.8169 14.9331L8.88392 8.00004Z"
              fill="black"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default DrawerProduct;
