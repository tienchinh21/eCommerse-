import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.scss";
import Button from "@components/Button/Button";
import useTranslateImage from "@/hooks/useTranslateImage";

const SaleHomePage = () => {
  const { container, title, des, boxIcon, boxImage } = style;
  const { translateXPosition } = useTranslateImage();

  return (
    <div className={container}>
      <div
        className={boxImage}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: `transform 0.6s ease`,
        }}
      >
        <img
          src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
          alt=""
        />
      </div>
      <div>
        <h2 className={title}>Sale of the year</h2>
        <div className={des}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </div>
        <div className={boxIcon}>
          <Button isPrimary={false} content={"Read more"} />
        </div>
      </div>
      <div
        className={boxImage}
        style={{
          transform: `translateX(-${translateXPosition}px)`,
          transition: `transform 0.6s ease`,
        }}
      >
        <img
          src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SaleHomePage;
