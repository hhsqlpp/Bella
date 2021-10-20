import { Link, useHistory } from "react-router-dom";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import burger from "../../assets/images/icons/Burger.svg";
import logo from "../../assets/images/icons/header-logo.svg";
import searchImg from "../../assets/images/icons/search.svg";
import cart from "../../assets/images/icons/shop-bag.svg";
import user from "../../assets/images/icons/user.svg";
import Drawer from "../Drawer";
import { setSearch } from "../../redux/actions/search";
import { useRef, useState } from "react";

export default function Burger() {
  const [navModal, setNavModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();

  const history = useHistory();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const toggleNavModal = () => {
    setNavModal(!navModal);
  };

  const toggleCartModal = () => {
    setCartModal(!cartModal);
  };

  const toggleSearchModal = () => {
    setSearchModal(!searchModal);
  };

  const search = (e) => {
    if (e.key === "Enter") {
      dispatch(setSearch(query));
      history.push("/search-products");
      toggleSearchModal();
    }
  };

  return (
    <div className={styles.burger}>
      <div className={styles.container}>
        <img
          className={styles.burger__icon}
          src={burger}
          onClick={toggleNavModal}
        />
        <Link to="/" className={styles.burger__logo}>
          <img src={logo} alt="" />
        </Link>
        <div className={styles.burger__actions}>
          <img
            className={styles.search}
            src={searchImg}
            onClick={toggleSearchModal}
          />
          <img className={styles.cart} src={cart} onClick={toggleCartModal} />
        </div>
        {navModal ? (
          <div className={styles.burger__nav_block}>
            <nav className={styles.burger__nav}>
              <Link to="/products" onClick={toggleNavModal}>
                Товары
              </Link>
              <Link to="/about" onClick={toggleNavModal}>
                О нас
              </Link>
              <Link to="/news" onClick={toggleNavModal}>
                Новости
              </Link>
              <Link to="/delivery" onClick={toggleNavModal}>
                Доставка
              </Link>
              <Link to="/contacts" onClick={toggleNavModal}>
                Контакты
              </Link>
              <Link to="/favorites" onClick={toggleNavModal}>
                Избранное
              </Link>
            </nav>
            <a className={styles.burger__user}>
              <span>
                <img src={user} alt="" />
              </span>
              Войти
            </a>
          </div>
        ) : null}
        <Drawer active={cartModal} />
        {searchModal ? (
          <div className={styles.burger__search__block} ref={inputRef}>
            <input
              type="text"
              placeholder="Искать"
              value={query}
              onChange={(event) => handleChange(event)}
              onKeyPress={(e) => search(e)}
              className={styles.burger__search__block__field}
            />
            <span onClick={() => setQuery("")}>&times;</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
