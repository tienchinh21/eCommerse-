import React from "react";
import style from "./style.module.scss";
import MainLayout from "@components/Layout/Layout";
import ProductItem from "@components/ProductItem/ProductItem";

const PopularProduct = ({ data }) => {
  const { container } = style;

  return (
    <MainLayout>
      <div className={container}>
        {data.map((item) => (
          <ProductItem
            key={item.id}
            src={item.images[0]}
            preSrc={item.images[1]}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default PopularProduct;
