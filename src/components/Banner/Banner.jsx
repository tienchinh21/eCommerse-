import React from "react";
import style from "./style.module.scss";
import Button from "@components/Button/Button";

const Banner = () => {
  const { container, content, title, des } = style;
  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>XStore Marseille04 Demo</h1>
        <div className={des}>
          Make yours celebrations even more special this years with beautiful.
        </div>
        <Button content={"Go to shop"} />
      </div>
    </div>
  );
};

export default Banner;
