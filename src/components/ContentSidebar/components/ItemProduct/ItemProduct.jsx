import React, { useContext, useState } from "react";
import style from "./style.module.scss";
import { RiCloseLine } from "react-icons/ri";
import { removeCart } from "@/apis/cartService";
import { SideBarContext } from "@/contexts/SideBar";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";

const ItemProduct = ({
  src,
  nameProduct,
  sizeProduct,
  priceProduct,
  sku,
  quantity,
  productId,
  userId,
}) => {
  const {
    container,
    boxContent,
    title,
    price,
    boxClose,
    size,
    overlayLoading,
  } = style;
  const { handleGetProductToCart } = useContext(SideBarContext);
  const [isDelete, setIsDelete] = useState(false);

  const handleRemoveProduct = () => {
    console.log(userId, productId);
    // const data = {
    //   userId,
    //   productId,
    // };
    setIsDelete(true);
    removeCart({
      userId,
      productId,
    })
      .then((res) => {
        console.log(res);
        setIsDelete(false);
        handleGetProductToCart({ userId, type: "cart" });
      })
      .catch((err) => {
        console.log(err);
        setIsDelete(false);
      });
  };

  return (
    <div className={container}>
      <img src={src} alt="" />
      <div onClick={handleRemoveProduct} className={boxClose}>
        <RiCloseLine style={{ color: "c1c1c1" }} />
      </div>
      <div className={boxContent}>
        <div className={title}>{nameProduct}</div>
        <div className={size}>Size: {sizeProduct}</div>
        <div className={price}>
          {quantity} x ${priceProduct}
        </div>
        <div className={price}>SKU: {sku}</div>
      </div>
      {isDelete && (
        <div className={overlayLoading}>
          <LoadingTextCommon />
        </div>
      )}
    </div>
  );
};

export default ItemProduct;
