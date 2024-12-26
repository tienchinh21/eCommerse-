import React from "react";
import ShoppingCardTable from "./ShoppingCardTable";
import style from "../../style.module.scss";

const Contents = () => {
  const { containerContent } = style;
  return (
    <div className={containerContent}>
      <div>
        <ShoppingCardTable />
      </div>
      <div>THANH TOÁN</div>
    </div>
  );
};

export default Contents;
