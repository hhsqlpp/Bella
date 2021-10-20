import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewsBlock } from "../";
import styles from "./styles.module.scss";
import fetchNews from "../../redux/actions/news";

const News = () => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <section className={styles.news}>
      <div className="container">
        <h2 className="section-title">Новости</h2>
        <ul className={styles.news__list}>
          {news.length > 0
            ? news.map((item) => {
                return <NewsBlock data={item} key={item.id} />;
              })
            : null}
        </ul>
      </div>
    </section>
  );
};

export default News;
