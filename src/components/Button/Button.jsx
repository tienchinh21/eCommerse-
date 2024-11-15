import React from "react";
import classNames from "classnames";
import styles from "./style.module.scss";

const Button = ({ content, isPrimary = true }) => {
  const { btn, primaryBtn, secondaryBtn } = styles;
  return (
    <>
      <button
        className={classNames(btn, {
          [primaryBtn]: isPrimary,
          [secondaryBtn]: !isPrimary,
        })}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
