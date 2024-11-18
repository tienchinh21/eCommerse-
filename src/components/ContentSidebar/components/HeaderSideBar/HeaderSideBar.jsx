import React from "react";
import style from "./style.module.scss";

const HeaderSideBar = ({ icon, title }) => {
  const { container } = style;
  return (
    <div>
      <div className={container}>
        {icon}
        {title}
      </div>
    </div>
  );
};

export default HeaderSideBar;
