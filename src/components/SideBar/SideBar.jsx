import React, { useContext } from "react";
import style from "./style.module.scss";
import { SideBarContext } from "@/contexts/SideBar";
import classNames from "classnames";
import { RiCloseLine } from "react-icons/ri";
import Login from "@components/ContentSidebar/Login/Login";
import Compare from "@components/ContentSidebar/Compare/Compare";
import WishList from "@components/ContentSidebar/components/WishLIst/WishList";
import Cart from "@components/ContentSidebar/Cart/Cart";

const SideBar = () => {
  const { overlay, sideBarContainer, container, slideSideBar, closeBox } =
    style;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleContent = () => {
    switch (type) {
      case "login":
        return <Login />;
      case "register":
        return <Compare />;
      case "wishList":
        return <WishList />;
      case "cart":
        return <Cart />;
      default:
        return <Login />;
    }
  };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen,
        })}
        onClick={handleToggle}
      ></div>
      <div
        className={classNames(sideBarContainer, {
          [slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={closeBox} onClick={handleToggle}>
            <RiCloseLine />
          </div>
        )}
        {handleContent()}
      </div>
    </div>
  );
};

export default SideBar;
