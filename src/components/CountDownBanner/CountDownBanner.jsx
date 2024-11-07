import React from "react";
import style from "./style.module.scss";
import CountDownTimer from "@components/CountDowntimer/CountDownTimer";
import Button from "@components/Button/Button";

const CountDownBanner = () => {
  const { container, containerTimer, title } = style;
  const targetDate = "2024-12-31T23:59:59";
  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountDownTimer targetDate={targetDate} />
      </div>
      <p className={title}>The classics make a comeback</p>
      <Button content={"Buy nơw"} />
    </div>
  );
};

export default CountDownBanner;
