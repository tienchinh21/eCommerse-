import React, { useContext, useState } from "react";
import style from "../style.module.scss";
import { SideBarContext } from "@/contexts/SideBar";
import { storeContext } from "@/contexts/StoreProvider";

const Menu = ({ content, href }) => {
  const { menu, subMenu } = style;
  const [showSubMenu, setShowSubMenu] = useState(false);
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { userInfo, handleLogout } = useContext(storeContext);

  const handleClickShowLogin = () => {
    if (content === "Sign in" && !userInfo) {
      setIsOpen(true);
      setType("login");
    }
  };

  const handleRenderNameUser = ({ content }) => {
    if (content === "Sign in" && userInfo) {
      return `Hello: ${userInfo.username}`;
    } else {
      return content;
    }
  };

  const handleClickShowSubMenu = () => {
    if (content === "Sign in" && userInfo) {
      setShowSubMenu(true);
    }
  };
  return (
    <div
      onMouseEnter={handleClickShowSubMenu}
      className={menu}
      onClick={handleClickShowLogin}
    >
      {handleRenderNameUser({ content })}
      {showSubMenu && (
        <div
          onClick={handleLogout}
          onMouseLeave={() => setShowSubMenu(false)}
          className={subMenu}
        >
          test
        </div>
      )}
    </div>
  );
};

export default Menu;
