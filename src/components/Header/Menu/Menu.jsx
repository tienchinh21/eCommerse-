import React from "react";
import style from "../style.module.scss";

const Menu = ({ content, href }) => {
  const { menu } = style;
  return <div className={menu}>{content}</div>;
};

export default Menu;
