import HeaderSideBar from "@components/ContentSidebar/components/HeaderSideBar/HeaderSideBar";
import ItemProduct from "@components/ContentSidebar/components/ItemProduct/ItemProduct";
import React from "react";
import { IoReloadOutline } from "react-icons/io5";
import style from "./style.module.scss";
import Button from "@components/Button/Button";

const Compare = () => {
  const { container, boxIcon } = style;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<IoReloadOutline style={{ fontSize: 30 }} />}
          title={"compare"}
        />
        <ItemProduct />
      </div>
      <div className={boxIcon}>
        <Button content={"VIEW COMPARE"} />
      </div>
    </div>
  );
};

export default Compare;
