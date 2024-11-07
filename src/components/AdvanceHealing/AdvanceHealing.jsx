import React from "react";
import style from "./style.module.scss";
import MainLayout from "@components/Layout/Layout";

const AdvanceHealing = () => {
  const { containerAdvance, headLine, des, title, containerMiddleBox } = style;
  return (
    <>
      <MainLayout>
        <div className={containerAdvance}>
          <div className={headLine}></div>
          <div className={containerMiddleBox}>
            <span class={des}>don't miss super offers </span>
            <h2 className={title}>Our best products</h2>
          </div>
          <div className={headLine}></div>
        </div>
      </MainLayout>
    </>
  );
};

export default AdvanceHealing;
