import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewsBlock, Breadcrumbs, Pagination } from "../../components";
import styles from "./styles.module.scss";
import fetchNews from "../../redux/actions/news";

const News = () => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <div className={styles.news__section}>
      <div className="container">
        <div className="breadcrumbs">
          <Breadcrumbs current={"Новости"} />
        </div>
        <div className={styles.news__section__content}>
          <h3>Новости</h3>
          <div className={(styles.news__list, styles.news__section__list)}>
            {news.length > 0
              ? news.map((item) => {
                  return <NewsBlock data={item} key={item.id} />;
                })
              : null}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default News;
