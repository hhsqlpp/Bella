import React from "react";

import { Button } from "../../components";

import styles from "./styles.module.scss";

function CategoryCard({ image, type }) {
  return (
    <div className={styles.categories__item}>
      <img
        src={image}
        alt="Banner"
        className={styles.categories__item__image}
      />
      <span className={styles.categories__item__type}>{type}</span>
      <Button black>
        Смотреть все
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.80134 6.54158L1.15733 0.189747C0.892453 -0.0632489 0.46353 -0.0632489 0.198656 0.189747C-0.0662186 0.442963 -0.0662186 0.853447 0.198656 1.10644L6.36334 7.00001L0.198656 12.8936C-0.0662186 13.1466 -0.0662186 13.5571 0.198656 13.8101C0.331093 13.9367 0.504427 14 0.677991 14C0.851556 14 1.02489 13.9367 1.15733 13.8101L7.80134 7.45828C8.06622 7.20506 8.06622 6.79455 7.80134 6.54158Z"
            fill="#2B2A2A"
          />
        </svg>
      </Button>
    </div>
  );
}

export default CategoryCard;
