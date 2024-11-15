import React from "react";
import MainLayout from "@components/Layout/Layout";
import style from "./style.module.scss";
import CountDownBanner from "@components/CountDownBanner/CountDownBanner";
import ProductItem from "@components/ProductItem/ProductItem";

const HeadingListProduct = ({ data }) => {
  const { container, containerItem } = style;
  return (
    <MainLayout>
      <div className={container}>
        <CountDownBanner />
        <div className={containerItem}>
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
      </div>
    </MainLayout>
  );
};

export default HeadingListProduct;
