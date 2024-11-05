import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/logo/LogoShop.png";
import cartIcon from "../../assets/icon/svgs/cart.svg";
import reloadIcon from "../../assets/icon/svgs/reloadicon.svg";
import heartIcon from "../../assets/icon/svgs/hearticon.svg";
import BoxIcon from "./BoxIcon/BoxIcon";
import { DataBoxIcon, DataMenu } from "./constants";
import Menu from "./Menu/Menu";

const Header = () => {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
  } = style;

  return (
    <div className={container}>
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
            <img src={reloadIcon} alt="reloadIcon" />
            <img src={heartIcon} alt="heartIcon" />
            <img src={cartIcon} alt="cartIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
