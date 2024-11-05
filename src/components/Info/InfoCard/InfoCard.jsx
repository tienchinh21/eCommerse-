import React from "react";
import style from "../style.module.scss";

const InfoCard = ({ content, description, src }) => {
  const { containerCard, containerContent, title, des } = style;

  return (
    <div className={containerCard}>
      <img width={40} height={40} src={src} alt="truckIcon" />
      <div className={containerContent}>
        <div className={title}>{content}</div>
        <div className={des}>{description}</div>
      </div>
    </div>
  );
};

export default InfoCard;
