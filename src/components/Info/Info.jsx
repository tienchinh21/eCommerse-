import React from "react";
import MainLayout from "@components/Layout/Layout";
import InfoCard from "./InfoCard/InfoCard";
import dataInfo from "@components/Info/constants";
import style from "./style.module.scss";

const Info = () => {
  const { container } = style;

  return (
    <>
      <MainLayout>
        <div className={container}>
          {dataInfo.map((item) => {
            return (
              <InfoCard
                content={item.content}
                description={item.description}
                src={item.src}
              />
            );
          })}
        </div>
      </MainLayout>
    </>
  );
};

export default Info;
