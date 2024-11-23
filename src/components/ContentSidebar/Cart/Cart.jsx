import React, { useContext } from "react";
import style from "./style.module.scss";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";
import HeaderSideBar from "@components/ContentSidebar/components/HeaderSideBar/HeaderSideBar";
import ItemProduct from "@components/ContentSidebar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";
import { SideBarContext } from "@/contexts/SideBar";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    container,
    boxIcon,
    boxTotal,
    containerListProductCart,
    overlayLoading,
    isEmpty,
    boxEmpty,
    textEmpty,
  } = style;
  const navigate = useNavigate();
  const { getProductToCart, isLoading, setIsOpen } = useContext(SideBarContext);

  const subTotal = getProductToCart.reduce((total, item) => {
    return total + item.total;
  }, 0);

  const handleGoToShop = () => {
    navigate("/shop");
    setIsOpen(false);
  };

  return (
    <div
      className={classNames(container, {
        [isEmpty]: !getProductToCart.length,
      })}
    >
      <div>
        <HeaderSideBar
          icon={<PiShoppingCartSimpleLight style={{ fontSize: 30 }} />}
          title={"Cart"}
        />
        {isLoading ? (
          <LoadingTextCommon />
        ) : (
          getProductToCart.map((item, index) => (
            <ItemProduct
              key={index}
              src={item.images[0]}
              nameProduct={item.name}
              quantity={item.quantity}
              priceProduct={item.price}
              sizeProduct={item.size}
              sku={item.sku}
              productId={item.productId}
              userId={item.userId}
            />
          ))
        )}
      </div>
      {getProductToCart.length ? (
        <div style={{ đisplay: "flex", justifyContent: "flex-end" }}>
          <div style={{ marginBottom: 10 }} className={boxTotal}>
            <div>SUBTOTAL</div>
            <div>${subTotal}</div>
          </div>
          <div className={boxIcon}>
            <Button isW100={true} content={"VIEW WISHLIST"} />
            <Button isW100={true} content={"ADD TO CARD"} isPrimary={false} />
          </div>
        </div>
      ) : (
        <div className={boxEmpty}>
          <div className={textEmpty}>No products in the cart</div>
          <div>
            <Button onClick={handleGoToShop} content={"RETURN TO SHOP"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
