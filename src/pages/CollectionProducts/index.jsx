import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import fetchCollectionInfo from "../../redux/actions/collectionInfo";
import ProductItem from "../../components/ProductItem";

export default function CollectionProducts() {
  const dispatch = useDispatch();
  const { products, title, loading } = useSelector(
    (state) => state.collectionInfo
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCollectionInfo(id));
  }, []);

  return (
    <div className={styles.collection_products}>
      <div className={styles.container}>
        <h1 className={styles.collection_products__title}>{title}</h1>
        <div className={styles.collection_products__list}>
          {!loading
            ? products.map((item) => {
                return <ProductItem data={item} key={item.id} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}
