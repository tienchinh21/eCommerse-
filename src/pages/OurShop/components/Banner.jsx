import React from "react";
import style from "../style.module.scss";
import CountDownTimer from "@components/CountDowntimer/CountDownTimer";
import Button from "@components/Button/Button";

const Banner = () => {
  const { containerBanner, contentBox, title, boxIcon } = style;
  const targetDate = "2024-12-31T23:59:59";
  return (
    <div className={containerBanner}>
      <div className={contentBox}>
        <div>
          <CountDownTimer targetDate={targetDate} />
        </div>
        <div className={title}>The classics make a comeback</div>
        <div className={boxIcon}>
          <Button content={"Buy now"} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
