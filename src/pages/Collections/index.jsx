import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { CategoryCard } from "../../components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import fetchCollection from "../../redux/actions/collections";
import category1 from "../../assets/images/category-5.jpg";
import { Link } from "react-router-dom";

export default function Collections() {
  const { collections, loading } = useSelector((state) => state.collections);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollection());
  }, []);

  return (
    <div>
      <div>
        <div className={styles.collection}>
          <div className={styles.container}>
            <h3 className={styles.collection__title}>Коллекция</h3>
            <div className={styles.collection__list}>
              {!loading
                ? collections.map((item) => {
                    return (
                      <Link to={`/collection/${item.id}`}>
                        <CategoryCard
                          image={category1}
                          title={item.title}
                          key={item.id}
                        />
                      </Link>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
