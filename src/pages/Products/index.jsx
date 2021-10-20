import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sidebar, Pagination } from "../../components";
import { fetchProduct } from "../../redux/actions/products";
import ProductItem from "../../components/ProductItem";
import styles from "./styles.module.scss";

const Products = () => {
  const { products } = useSelector((state) => state.product);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [productsPerPage] = React.useState(1);
  const [filter, setFilter] = useState(1);
  const [visiblePopup, setVisiblePopup] = useState(false);
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex);
  const dispatch = useDispatch();
  const FilterBy = () => {
    switch (filter) {
      case 1:
        return filterByDate(currentProduct);
      case 2:
        return filterByName(currentProduct);
      case 3:
        return filterByBigPrice(currentProduct);
      case 4:
        return filterByLowPrice(currentProduct);
      default:
        return filterByDate(currentProduct);
    }
  };

  const setFilterNumber = (index) => {
    setFilter(index);
  };

  const renderProducts = (currentProduct) => {
    return currentProduct.map((item) => {
      return <ProductItem data={item} key={item.id} />;
    });
  };

  const filterByName = (currentProduct) => {
    for (let i = 0; i < currentProduct.length; i++) {
      let indexMin = i;
      for (let j = i + 1; j < currentProduct.length; j++) {
        if (currentProduct[j].title < currentProduct[indexMin].title) {
          indexMin = j;
        }
      }

      let tmp = currentProduct[i];
      currentProduct[i] = currentProduct[indexMin];
      currentProduct[indexMin] = tmp;
    }

    return renderProducts(currentProduct);
  };

  const filterByBigPrice = (currentProduct) => {
    for (let i = 0; i < currentProduct.length; i++) {
      let indexMin = i;
      for (let j = i + 1; j < currentProduct.length; j++) {
        if (currentProduct[j].price < currentProduct[indexMin].price) {
          indexMin = j;
        }
      }

      let tmp = currentProduct[i];
      currentProduct[i] = currentProduct[indexMin];
      currentProduct[indexMin] = tmp;
    }

    return renderProducts(currentProduct);
  };

  const filterByLowPrice = (currentProduct) => {
    for (let i = 0; i < currentProduct.length; i++) {
      let indexMin = i;
      for (let j = i + 1; j < currentProduct.length; j++) {
        if (currentProduct[j].price > currentProduct[indexMin].price) {
          indexMin = j;
        }
      }

      let tmp = currentProduct[i];
      currentProduct[i] = currentProduct[indexMin];
      currentProduct[indexMin] = tmp;
    }

    return renderProducts(currentProduct);
  };

  const filterByDate = (currentProduct) => {
    for (let i = 0; i < currentProduct.length; i++) {
      let indexMin = i;
      for (let j = i + 1; j < currentProduct.length; j++) {
        if (currentProduct[j].added_at > currentProduct[indexMin].added_at) {
          indexMin = j;
        }
      }

      let tmp = currentProduct[i];
      currentProduct[i] = currentProduct[indexMin];
      currentProduct[indexMin] = tmp;
    }

    return renderProducts(currentProduct);
  };

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const paginate = (number) => setCurrentPage(number);

  const prevPage = () => setCurrentPage((prev) => prev + 1);

  const nextPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className={styles.products}>
      <div className="container">
        <div className={styles.products__wrapper}>
          <Sidebar />
          <div className={styles.products__list}>
            <div className={styles.products__list__header}>
              <h1>Все товары</h1>
              <div
                className={classNames(styles.products__list__sort, {
                  active: visiblePopup,
                })}
              >
                <div
                  onClick={toggleVisiblePopup}
                  className={styles.products__list__sort__label}
                >
                  Сортировать по
                  <svg
                    width="14"
                    height="7"
                    viewBox="0 0 14 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.45841 6.82618L13.8103 1.01266C14.0632 0.780896 14.0632 0.405589 13.8103 0.173824C13.557 -0.0579413 13.1466 -0.0579413 12.8936 0.173824L6.99999 5.56792L1.10639 0.173823C0.853393 -0.0579418 0.442908 -0.0579418 0.189913 0.173823C0.0633049 0.289706 -1.92931e-08 0.441373 -2.59315e-08 0.593242C-3.25699e-08 0.745111 0.0633049 0.896778 0.189913 1.01266L6.54172 6.82618C6.79493 7.05794 7.20545 7.05794 7.45841 6.82618Z"
                      fill="#AB844A"
                    />
                  </svg>
                </div>
                <div
                  className={classNames(styles.products__list__sort__inner, {
                    active: visiblePopup,
                  })}
                >
                  <ul>
                    <li
                      className={`${filter === 1 ? styles.active : null}`}
                      onClick={() => {
                        setFilterNumber(1);
                        toggleVisiblePopup();
                      }}
                    >
                      По обновлению
                    </li>
                    <li
                      className={`${filter === 2 ? styles.active : null}`}
                      onClick={() => {
                        setFilterNumber(2);
                        toggleVisiblePopup();
                      }}
                    >
                      По алфавиту
                    </li>
                    <li
                      className={`${filter === 3 ? styles.active : null}`}
                      onClick={() => {
                        setFilterNumber(3);
                        toggleVisiblePopup();
                      }}
                    >
                      По цене (высокая &gt; низкая)
                    </li>
                    <li
                      className={`${filter === 4 ? styles.active : null}`}
                      onClick={() => {
                        setFilterNumber(4);
                        toggleVisiblePopup();
                      }}
                    >
                      По цене (низкая &gt; высокая)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.cards__products}>{FilterBy()}</div>
            <Pagination
              currentPage={currentPage}
              itemsPerPage={productsPerPage}
              totalItems={products.length}
              paginate={paginate}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
