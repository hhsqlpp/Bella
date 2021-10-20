import React from "react";
import { Login, Register } from "../User";
import { useSelector } from "react-redux";

import styles from "./styles.module.scss";
import classNames from "classnames";

const ModalAuth = ({ active, disabled }) => {
  const [type, setType] = React.useState("login");
  return (
    <div
      className={classNames(styles.modal, {
        active: active,
        disabled: disabled,
      })}
    >
      <div className={styles.modal__area}>
        <div className={styles.modal__title}>
          <svg
            width="113"
            height="20"
            viewBox="0 0 113 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9611 9.61268C15.1508 9.94131 16.0605 10.5282 16.6904 11.3732C17.3435 12.2183 17.6701 13.2864 17.6701 14.5775C17.6701 16.3146 16.9936 17.6526 15.6407 18.5916C14.311 19.5305 12.3632 20 9.79728 20H0V0H9.23743C11.5934 0 13.4129 0.469485 14.6959 1.40845C15.9789 2.32395 16.6204 3.57981 16.6204 5.17606C16.6204 6.20892 16.3871 7.10094 15.9206 7.85211C15.454 8.60329 14.8009 9.19014 13.9611 9.61268ZM3.39406 2.60563V8.59155H8.88753C10.2638 8.59155 11.3252 8.33333 12.0716 7.8169C12.8414 7.30047 13.2263 6.56103 13.2263 5.59859C13.2263 4.61268 12.8531 3.87324 12.1066 3.38028C11.3602 2.86385 10.2871 2.60563 8.88753 2.60563H3.39406ZM9.62233 17.3944C12.7015 17.3944 14.241 16.3615 14.241 14.2958C14.241 12.23 12.7015 11.1972 9.62233 11.1972H3.39406V17.3944H9.62233Z"
              fill="#2B2A2A"
            />
            <path
              d="M41.6228 17.1479V20H26.717V0H41.238V2.8169H30.111V8.4507H40.0133V11.2324H30.111V17.1479H41.6228Z"
              fill="#2B2A2A"
            />
            <path
              d="M50.8712 0H54.2653V17.1479H64.9373V20H50.8712V0Z"
              fill="#2B2A2A"
            />
            <path
              d="M72.8044 0H76.1984V17.1479H86.8705V20H72.8044V0Z"
              fill="#2B2A2A"
            />
            <path
              d="M107.507 15.2465H96.8345L94.7351 20H91.411L100.508 0H103.868L113 20H109.571L107.507 15.2465ZM106.317 12.5352L102.188 3.09859L98.0242 12.5352H106.317Z"
              fill="#2B2A2A"
            />
          </svg>
        </div>
        {type === "login" && (
          <Login onRedirectRegister={() => setType("register")} />
        )}
        {type === "register" && <Register />}
      </div>
    </div>
  );
};

export default ModalAuth;
