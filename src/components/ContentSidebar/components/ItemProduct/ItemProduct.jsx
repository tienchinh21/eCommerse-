import React from "react";
import style from "./style.module.scss";
import { RiCloseLine } from "react-icons/ri";

const ItemProduct = () => {
  const { container, boxContent, title, price, boxClose, size } = style;
  return (
    <div className={container}>
      <img
        src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg"
        alt=""
      />
      <div className={boxClose}>
        <RiCloseLine style={{ color: "c1c1c1" }} />
      </div>
      <div className={boxContent}>
        <div className={title}>title of prodcut</div>
        <div className={size}>Size: M</div>
        <div className={price}>$199.9</div>
        <div className={price}>SKU: 12349</div>
      </div>
    </div>
  );
};

export default ItemProduct;
