import React from "react";
import style from "./style.module.scss";
import cartIcon from "../../assets/icon/svgs/cart.svg";
import reloadIcon from "../../assets/icon/svgs/reloadicon.svg";
import heartIcon from "../../assets/icon/svgs/hearticon.svg";

const ProductItem = ({ src, preSrc, name, price }) => {
  const {
    boxImg,
    showMessWhenHover,
    showFnWhenHover,
    boxIcon,
    title,
    priceCl,
  } = style;
  return (
    <div>
      <div className={boxImg}>
        <img src={src} alt="" />
        <img src={preSrc} alt="" className={showMessWhenHover} />
        <div className={showFnWhenHover}>
          <div className={boxIcon}>
            <img src={reloadIcon} alt="reloadIcon" />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt="heartIcon" />
          </div>
          <div className={boxIcon}>
            <img src={cartIcon} alt="cartIcon" />
          </div>
          <div className={boxIcon}>
            <img src={cartIcon} alt="cartIcon" />
          </div>
        </div>
      </div>
      <div className={title}>{name}</div>
      <div className={priceCl}>${price}</div>
    </div>
  );
};

export default ProductItem;
