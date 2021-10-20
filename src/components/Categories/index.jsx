import React, { useEffect } from "react";
import { CategoryCard } from "..";
import category1 from "../../assets/images/category-1.jpg";
import category2 from "../../assets/images/category-2.jpg";
import category3 from "../../assets/images/category-3.jpg";
import category4 from "../../assets/images/category-4.jpg";

import { useSelector, useDispatch } from "react-redux";
import fetchCategores from "../../redux/actions/categories";

import styles from "./styles.module.scss";

function Categories() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategores());
  }, []);

  return (
    <section className={styles.categories}>
      <div className="container">
        <div className={styles.categories__list}>
          {categories.map((item) => {
            return <CategoryCard key={item.id} image={category1} type={item.title} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Categories;
