import React from "react";
import style from "./style.module.scss";
import HeaderSideBar from "@components/ContentSidebar/components/HeaderSideBar/HeaderSideBar";
import { CiHeart } from "react-icons/ci";
import ItemProduct from "@components/ContentSidebar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

const WishList = () => {
  const { container, boxIcon } = style;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<CiHeart style={{ fontSize: 30 }} />}
          title={"Wish List"}
        />
        <ItemProduct />
      </div>
      <div className={boxIcon}>
        <Button content={"VIEW WISHLIST"} />
        <Button content={"ADD TO CARD"} isPrimary={false} />
      </div>
    </div>
  );
};

export default WishList;
