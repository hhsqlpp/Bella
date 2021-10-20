import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

const Button = ({
  children,
  brown,
  black,
  width,
  center,
  submit,
  onClick,
  resetFinish,
  reset,
}) => {
  return (
    <button
      style={{ width: `${width}px` }}
      onClick={onClick}
      type={submit && "submit"}
      className={classNames(styles.btn, {
        brown: brown,
        black: black,
        center: center,
        reset: reset,
        reset__finish: resetFinish,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
