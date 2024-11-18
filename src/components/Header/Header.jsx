import React, { useContext, useEffect, useState } from "react";
import style from "./style.module.scss";
import logo from "../../assets/logo/LogoShop.png";
import cartIcon from "../../assets/icon/svgs/cart.svg";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import reloadIcon from "../../assets/icon/svgs/reloadicon.svg";
import { IoReloadOutline } from "react-icons/io5";
import heartIcon from "../../assets/icon/svgs/hearticon.svg";
import { CiHeart } from "react-icons/ci";
import BoxIcon from "./BoxIcon/BoxIcon";
import { DataBoxIcon, DataMenu } from "./constants";
import Menu from "./Menu/Menu";
import useScrollHandling from "@/hooks/useScrollHandling";
import classNames from "classnames";
import { SideBarContext } from "@/contexts/SideBar";

const Header = () => {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    fixedHeader,
    topHeader,
  } = style;

  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);
  const { setIsOpen, setType } = useContext(SideBarContext);

  const handleOpenSidebar = ({ type }) => {
    setIsOpen(true);
    setType(type);
  };

  useEffect(() => {
    setFixedPosition(scrollPosition > 80);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {DataBoxIcon.map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {DataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.type} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img
            src={logo}
            alt="Logo"
            style={{ with: "153px", height: "53px" }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {DataMenu.slice(3, DataMenu.length).map((item) => {
              return <Menu content={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerBoxIcon}>
            <IoReloadOutline
              onClick={() => handleOpenSidebar({ type: "compare" })}
              style={{
                width: 25,
                fontSize: 19,
              }}
            />
            <CiHeart
              style={{
                width: 25,
                fontSize: 20,
              }}
              onClick={() => handleOpenSidebar({ type: "wishList" })}
            />
            <PiShoppingCartSimpleLight
              style={{
                width: 25,
                fontSize: 20,
              }}
              onClick={() => handleOpenSidebar({ type: "cart" })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
