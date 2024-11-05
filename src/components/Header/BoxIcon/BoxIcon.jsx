import React from "react";
import style from "../style.module.scss";
import fbIcon from "../../../assets/icon/svgs/fbicon.svg";
import insIcon from "../../../assets/icon/svgs/instaicon.svg";
import ytbIcon from "../../../assets/icon/svgs/ytbicon.svg";

const BoxIcon = ({ type, href }) => {
  const { boxIcon } = style;

  const handleRenderIcon = (type) => {
    switch (type) {
      case "FB":
        return fbIcon;
      case "INS":
        return insIcon;
      case "YTB":
        return ytbIcon;
    }
  };

  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
};

export default BoxIcon;
