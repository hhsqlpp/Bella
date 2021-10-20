import React from "react";
import CategoryCard from "../CategoryCard";
import category1 from "../../assets/images/category-5.jpg";
import category2 from "../../assets/images/category-6.jpg";
import category3 from "../../assets/images/category-7.jpg";
import category4 from "../../assets/images/category-8.jpg";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchCollections from "../../redux/actions/collections";
import { Link } from "react-router-dom";

function Collections() {
  const dipsatch = useDispatch();
  const { collections, loading } = useSelector((state) => state.collections);

  useEffect(() => {
    dipsatch(fetchCollections());
  }, []);

  return (
    <section className={styles.collections} style={{ background: "#F6FDFF" }}>
      <div className="container">
        <h2 className="section-title">Коллекция</h2>
        <div className={styles.categories__list}>
          {!loading
            ? collections.map((item) => {
                return (
                  <Link key={item.id} to={`/collection/${item.id}/`}>
                    <CategoryCard
                      image={category1}
                      type={item.title}
                      key={item.id}
                    />
                  </Link>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
}

export default Collections;
