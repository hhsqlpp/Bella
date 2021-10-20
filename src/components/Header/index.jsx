import React from "react";
import classNames from "classnames";
import { Link, useHistory } from "react-router-dom";
import { Drawer, ModalAuth } from "../";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles.module.scss";
import { logout } from "../../redux/actions/auth";
import { setSearch } from "../../redux/actions/search";

const Header = () => {
  const [visibleSearchBlock, setVisibleSearchBlock] = React.useState(false);
  const [visibleDrawer, setVisibleDrawer] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef();
  const [visibleProfile, setVisibleProfile] = React.useState(false);
  const [visibleModal, setVisibleModal] = React.useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const name = useSelector((state) => state.search);

  const history = useHistory();

  const search = (e) => {
    if (e.key === "Enter") {
      dispatch(setSearch(query));
      history.push("/search-products");
      handleVisibleSearchBlock();
    }
  };

  const handleVisibleSearchBlock = () => {
    setVisibleSearchBlock(!visibleSearchBlock);
  };

  const changeSearch = (e) => {
    setQuery(e.target.value);
  };

  const toggleProfileDropdown = () => {
    setVisibleProfile(!visibleProfile);
  };

  const handleVisibleModal = () => {
    setVisibleModal(true);
  };

  const handleLogout = () => {
    setVisibleModal(false);
    dispatch(logout());
    setVisibleProfile(false);
  };

  const handleClickbyOverlay = () => {
    setVisibleDrawer(false);
    setVisibleModal(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link to="/products">
              <a href="#" className={styles.nav__link}>
                Товары
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/about">
              <a href="#" className={styles.nav__link}>
                О нас
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/news">
              <a href="#" className={styles.nav__link}>
                Новости
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link to="/delivery">
              <a href="#" className={styles.nav__link}>
                Доставка
              </a>
            </Link>
          </li>
          <li className={styles.nav__item}>
            <a href="#" className={styles.nav__link}>
              Контакты
            </a>
          </li>
        </ul>
        <Link to="/">
          <div className={styles.logo}>
            <svg
              width="138"
              height="24"
              viewBox="0 0 138 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0499 11.5352C18.5027 11.9296 19.6138 12.6338 20.3829 13.6479C21.1806 14.662 21.5794 15.9437 21.5794 17.493C21.5794 19.5775 20.7533 21.1831 19.101 22.3099C17.4772 23.4366 15.0985 24 11.9648 24H0V0H11.2811C14.1584 0 16.3804 0.563382 17.9472 1.69014C19.514 2.78873 20.2975 4.29577 20.2975 6.21127C20.2975 7.4507 20.0126 8.52113 19.4428 9.42253C18.8731 10.3239 18.0754 11.0282 17.0499 11.5352ZM4.14495 3.12676V10.3099H10.8538C12.5346 10.3099 13.8308 10 14.7424 9.38028C15.6825 8.76056 16.1525 7.87324 16.1525 6.71831C16.1525 5.53521 15.6967 4.64789 14.7851 4.05634C13.8735 3.43662 12.5631 3.12676 10.8538 3.12676H4.14495ZM11.7512 20.8732C15.5115 20.8732 17.3917 19.6338 17.3917 17.1549C17.3917 14.6761 15.5115 13.4366 11.7512 13.4366H4.14495V20.8732H11.7512Z"
                fill="#2B2A2A"
              />
              <path
                d="M50.8314 20.5775V24H32.6278V0H50.3614V3.38028H36.7728V10.1408H48.8658V13.4789H36.7728V20.5775H50.8314Z"
                fill="#2B2A2A"
              />
              <path
                d="M62.1259 0H66.2709V20.5775H79.304V24H62.1259V0Z"
                fill="#2B2A2A"
              />
              <path
                d="M88.9115 0H93.0565V20.5775H106.09V24H88.9115V0Z"
                fill="#2B2A2A"
              />
              <path
                d="M131.291 18.2958H118.258L115.694 24H111.635L122.745 0H126.847L138 24H133.812L131.291 18.2958ZM129.838 15.0423L124.796 3.71831L119.711 15.0423H129.838Z"
                fill="#2B2A2A"
              />
            </svg>
          </div>
        </Link>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item} onClick={handleVisibleSearchBlock}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M7.04606 0C3.16097 0 0 3.16097 0 7.04606C0 10.9314 3.16097 14.0921 7.04606 14.0921C10.9314 14.0921 14.0921 10.9314 14.0921 7.04606C14.0921 3.16097 10.9314 0 7.04606 0ZM7.04606 12.7913C3.87816 12.7913 1.30081 10.214 1.30081 7.04609C1.30081 3.87819 3.87816 1.30081 7.04606 1.30081C10.214 1.30081 12.7913 3.87816 12.7913 7.04606C12.7913 10.214 10.214 12.7913 7.04606 12.7913Z"
                  fill="#7C7C7C"
                />
                <path
                  d="M15.81 14.8898L12.081 11.1608C11.8269 10.9067 11.4154 10.9067 11.1613 11.1608C10.9072 11.4147 10.9072 11.8266 11.1613 12.0805L14.8903 15.8095C15.0173 15.9365 15.1836 16 15.3501 16C15.5164 16 15.6829 15.9365 15.81 15.8095C16.0641 15.5556 16.0641 15.1437 15.81 14.8898Z"
                  fill="#7C7C7C"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Поиск
          </li>
          <li className={styles.nav__item}>
            <Link to="/favorites">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5846 2.06787C13.6593 1.14259 12.4213 0.633057 11.0983 0.633057C9.95931 0.633057 8.88344 1.01081 8.01572 1.70624C7.13553 1.01081 6.05831 0.633057 4.93044 0.633057C3.60131 0.633057 2.36006 1.14281 1.43481 2.06787C0.509531 2.99296 0 4.23115 0 5.55393C0 6.8769 0.509531 8.1149 1.43481 9.03996L7.59309 15.1982C7.70531 15.3107 7.85266 15.3669 8 15.3669C8.14697 15.3669 8.29391 15.3108 8.40634 15.199L14.5696 9.05453C15.4922 8.11124 16 6.87153 16 5.56353C16 4.24343 15.4989 3.00371 14.5846 2.06787ZM13.7517 8.24437L8.00056 13.9779L2.24863 8.22615C1.54091 7.51824 1.15106 6.56918 1.15106 5.55393C1.15106 4.53868 1.54091 3.58962 2.24863 2.88171C2.95653 2.17399 3.90887 1.78415 4.93044 1.78415C5.93572 1.78415 6.88997 2.17571 7.61688 2.88631C7.84209 3.10674 8.20334 3.10481 8.42609 2.88171C9.134 2.17399 10.0829 1.78415 11.0983 1.78415C12.1137 1.78415 13.0626 2.17399 13.7657 2.87709C14.4642 3.59171 14.8489 4.54578 14.8489 5.56353C14.8489 6.56899 14.4576 7.52303 13.7517 8.24437Z"
                  fill="#7C7C7C"
                />
              </svg>
              Изобранное
            </Link>
          </li>
          {isAuthenticated ? (
            <li
              className={styles.nav__item}
              onClick={() => toggleProfileDropdown()}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99992 9.01221C3.19252 9.01221 0.544922 11.2865 0.544922 15.4161C0.544922 15.7386 0.806328 16 1.12886 16H14.871C15.1935 16 15.4549 15.7386 15.4549 15.4161C15.4549 11.2867 12.8073 9.01221 7.99992 9.01221ZM1.73405 14.8322C1.96373 11.7445 4.06883 10.1801 7.99992 10.1801C11.931 10.1801 14.0361 11.7445 14.266 14.8322H1.73405Z"
                  fill="#7C7C7C"
                />
                <path
                  d="M8.00042 0C5.79214 0 4.12695 1.69869 4.12695 3.95116C4.12695 6.26959 5.86458 8.15553 8.00042 8.15553C10.1363 8.15553 11.8739 6.26959 11.8739 3.95134C11.8739 1.69869 10.2087 0 8.00042 0ZM8.00042 6.98784C6.50845 6.98784 5.29483 5.62569 5.29483 3.95134C5.29483 2.3385 6.43273 1.16788 8.00042 1.16788C9.54302 1.16788 10.706 2.36438 10.706 3.95134C10.706 5.62569 9.49239 6.98784 8.00042 6.98784Z"
                  fill="#7C7C7C"
                />
              </svg>
              Профиль
            </li>
          ) : (
            <li onClick={handleVisibleModal} className={styles.nav__item}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.99992 9.01221C3.19252 9.01221 0.544922 11.2865 0.544922 15.4161C0.544922 15.7386 0.806328 16 1.12886 16H14.871C15.1935 16 15.4549 15.7386 15.4549 15.4161C15.4549 11.2867 12.8073 9.01221 7.99992 9.01221ZM1.73405 14.8322C1.96373 11.7445 4.06883 10.1801 7.99992 10.1801C11.931 10.1801 14.0361 11.7445 14.266 14.8322H1.73405Z"
                  fill="#7C7C7C"
                />
                <path
                  d="M8.00042 0C5.79214 0 4.12695 1.69869 4.12695 3.95116C4.12695 6.26959 5.86458 8.15553 8.00042 8.15553C10.1363 8.15553 11.8739 6.26959 11.8739 3.95134C11.8739 1.69869 10.2087 0 8.00042 0ZM8.00042 6.98784C6.50845 6.98784 5.29483 5.62569 5.29483 3.95134C5.29483 2.3385 6.43273 1.16788 8.00042 1.16788C9.54302 1.16788 10.706 2.36438 10.706 3.95134C10.706 5.62569 9.49239 6.98784 8.00042 6.98784Z"
                  fill="#7C7C7C"
                />
              </svg>
              Войти
            </li>
          )}
          <li
            className={classNames(styles.nav__item, {
              active: visibleDrawer,
            })}
            onClick={() => setVisibleDrawer(!visibleDrawer)}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.624 13.3558L13.8334 5.67848C13.8008 5.36013 13.5326 5.11816 13.2126 5.11816H2.80945C2.49029 5.11816 2.22229 5.35932 2.18879 5.67682L1.37691 13.3579C1.30991 14.0282 1.53338 14.7019 1.98985 15.2065C2.44635 15.7106 3.09385 16 3.76651 16H12.2557C12.9252 16 13.5667 15.7164 14.0148 15.2215C14.4693 14.7207 14.6913 14.0415 14.624 13.3558ZM13.0904 14.3832C12.8749 14.6208 12.5784 14.7517 12.2557 14.7517H3.76673C3.4461 14.7517 3.13588 14.612 2.91554 14.3686C2.6952 14.1252 2.58723 13.8021 2.61885 13.4856L3.3712 6.36676H12.6493L13.3821 13.481C13.4154 13.8187 13.3116 14.1391 13.0904 14.3832Z"
                fill="#7C7C7C"
              />
              <path
                d="M8.11385 0C6.1406 0 4.53516 1.60541 4.53516 3.57869V5.74253H5.78353V3.57869C5.78353 2.29369 6.82885 1.24838 8.11385 1.24838C9.39885 1.24838 10.4444 2.29369 10.4444 3.57869V5.74253H11.6925V3.57869C11.6925 1.60541 10.0871 0 8.11385 0Z"
                fill="#7C7C7C"
              />
            </svg>
            Корзина
          </li>
        </ul>
      </nav>
      {visibleSearchBlock && (
        <div className={styles.search__block} ref={inputRef}>
          <input
            type="text"
            placeholder="Искать"
            value={query}
            className={styles.search__block__field}
            onChange={(e) => changeSearch(e)}
            onKeyPress={(e) => search(e)}
          />
          <span onClick={() => setQuery("")}>&times;</span>
        </div>
      )}
      {visibleProfile && (
        <div className={styles.user__dropdown}>
          <ul>
            <li>
              <Link to="/order-list" onClick={toggleProfileDropdown}>
                Мои заказы
              </Link>
            </li>
            <li>
              <Link to="/profile" onClick={toggleProfileDropdown}>
                Профиль
              </Link>
            </li>
            <li onClick={handleLogout}>Выйти</li>
          </ul>
        </div>
      )}
      <Drawer
        active={visibleDrawer}
        handleClickbyOverlay={handleClickbyOverlay}
        handleVisibleDrawer={() => setVisibleDrawer(false)}
      />
      <div
        onClick={handleClickbyOverlay}
        className={classNames(styles.overlay, {
          activeDrawer: visibleDrawer,
          activeModal: visibleModal,
          disabled: isAuthenticated,
        })}
      ></div>
      <ModalAuth active={visibleModal} disabled={isAuthenticated} />
    </header>
  );
};

export default Header;
