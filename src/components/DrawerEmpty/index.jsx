import React from "react";
import Button from "../Button";

const DrawerEmpty = () => {
  return (
    <div className="drawer-empty">
      <div className="drawer-empty-image">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 11.2753C15 5.61064 19.4872 1 25 1C30.513 1 35.0001 5.61063 35 11.2753V17H33.497V11.2753C33.497 6.46003 29.6861 2.54507 25 2.54507C20.3139 2.54507 16.5037 6.46016 16.5037 11.2753V17H15V11.2753Z"
            fill="#7C7C7C"
          />
          <path
            d="M5.90573 40.207L8.88429 17.8678C8.95053 17.371 9.37431 17 9.87552 17H40.1245C40.6257 17 41.0495 17.371 41.1157 17.8678L44.0943 40.207C44.5739 43.8039 41.7756 47 38.1469 47H11.8531C8.22436 47 5.42614 43.8039 5.90573 40.207Z"
            stroke="#7C7C7C"
            stroke-width="1.6"
          />
        </svg>
      </div>
      <span>Ваша корзина пуста</span>
      <Button black center className="btn btn--black btn--drawer">
        Продолжить покупки
      </Button>
    </div>
  );
};

export default DrawerEmpty;
