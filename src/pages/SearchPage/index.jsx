import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { fetchProduct } from "../../redux/actions/products";
import ProductItem from "../../components/ProductItem";
import Breadcrumbs from "../../components/Breadcrumbs";

export default function SearchPage() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);
  const { name } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div className={styles.search}>
      <div className="container">
        <Breadcrumbs current={"Результаты поиска"} />
        <h1 className={styles.search__title}>Результаты поиска</h1>
        <p className={styles.search__quantity}>Найдено {products.filter((item) => item.title === name).length} моделей</p>
        <div className={styles.search__list}>
          {!loading
            ? products.map((item) => {
                if (item.title === name) {
                  return <ProductItem key={item.id} data={item} />;
                }
              })
            : null}
        </div>
      </div>
    </div>
  );
}
