import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import banner from "../../assets/images/news-detail.jpg";
import { Breadcrumbs, NewsBlock, Button } from "../../components";
import fetchNewsInfo from "../../redux/actions/newsInfo";
import { useParams } from "react-router";

import styles from "./styles.module.scss";

const NewsDetail = () => {
  const dispatch = useDispatch();
  const { newsInfo } = useSelector((state) => state.newsInfo);
  const { news } = useSelector((state) => state.news);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchNewsInfo(id));
  }, []);

  return (
    <>
      {Object.keys(newsInfo).length !== 0 ? (
        <div className={styles.news__detail}>
          <div className="container">
            <div className="breadcrumbs">
              <Breadcrumbs current={"Новости"} />
            </div>
            <div className={styles.detail__block}>
              <div className={styles.detail__block__image}>
                <img src={banner} alt="News Block Detail" />
              </div>
              <div className={styles.detail__block__info}>
                <span>{newsInfo.created_at}</span>
                <h3>{newsInfo.title}</h3>
                <p>{newsInfo.description}</p>
              </div>
            </div>
            <h3 className={styles.news__list__title}>Другие новости</h3>
            <div className={styles.news__list}>
              {news.map((item) => {
                return <NewsBlock data={item} key={item.id} />;
              })}
            </div>
            <Link to="/news">
              <Button black center width={344}>
                Все новости
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
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NewsDetail;
