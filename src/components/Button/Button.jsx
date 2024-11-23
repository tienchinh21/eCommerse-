import React from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

const Button = ({ content, isPrimary = true, isW100 = false, onClick }) => {
  const { btn, primaryBtn, secondaryBtn, w_100 } = styles;
  return (
    <>
      <button
        onClick={onClick}
        className={classNames(btn, {
          [primaryBtn]: isPrimary,
          [secondaryBtn]: !isPrimary,
          [w_100]: isW100,
        })}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
