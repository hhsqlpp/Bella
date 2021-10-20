import React from "react";
import { Card, Button } from "../";
import styles from "./styles.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductIsHit} from "../../redux/actions/product_is_hit";

const Bestsellers = () => {
  const dispatch = useDispatch()
  const items = useSelector(({productIsHit}) => productIsHit.data.results)
  React.useEffect(() => {
    dispatch(fetchProductIsHit())
  }, [])
  return (
    <section className={styles.bestsellers}>
      <div className="container">
        <h2 className="section-title">Хит продаж</h2>
        <div className={styles.bestsellers__list}>
          {
            items && items.map(obj => {
              return <Card key={obj.id} title={obj.title} colors={obj.colors} sizes={obj.sizes} image={obj.main_image} price={obj.price} new_price={obj.new_price} />
            })
          }
        </div>
      </div>
      <Button black center width={250}>
        <span>Смотреть все</span>
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
    </section>
  );
};

export default Bestsellers;
