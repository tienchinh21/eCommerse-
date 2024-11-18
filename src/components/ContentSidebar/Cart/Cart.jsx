import React from "react";
import style from "./style.module.scss";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import HeaderSideBar from "@components/ContentSidebar/components/HeaderSideBar/HeaderSideBar";
import ItemProduct from "@components/ContentSidebar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

const Cart = () => {
  const { container, boxIcon, boxTotal } = style;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<PiShoppingCartSimpleLight style={{ fontSize: 30 }} />}
          title={"Cart"}
        />
        <ItemProduct />
      </div>
      <div className={boxTotal}>
        <div>SUBTOTAL</div>
        <div>$199.9</div>
      </div>
      <div className={boxIcon}>
        <Button isW100={true} content={"VIEW WISHLIST"} />
        <Button isW100={true} content={"ADD TO CARD"} isPrimary={false} />
      </div>
    </div>
  );
};

export default Cart;
