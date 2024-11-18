import React, { useContext } from "react";
import style from "../style.module.scss";
import { SideBarContext } from "@/contexts/SideBar";

const Menu = ({ content, href }) => {
  const { menu } = style;
  const { setIsOpen, setType } = useContext(SideBarContext);

  const handleClickShowLogin = () => {
    if (content == "Sign in") {
      setIsOpen(true);
      setType("login");
    }
  };
  return (
    <div className={menu} onClick={handleClickShowLogin}>
      {content}
    </div>
  );
};

export default Menu;
