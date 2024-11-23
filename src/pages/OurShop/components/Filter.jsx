import React, { useContext } from "react";
import { CiGrid41 } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
import style from "../style.module.scss";
import classNames from "classnames";
import { OurShopContext } from "@/contexts/OurShopProvier";
import SelectBox from "@pages/OurShop/components/SelectBox";

const Filter = () => {
  const { containerFilter, filterBox } = style;
  const { sortOptions, showOptions, setSort, setShow, setIsShowGrid } =
    useContext(OurShopContext);

  const getValueSelect = (value, type) => {
    type === "sort" ? setSort(value) : setShow(value);
  };

  const handleShowGrid = (type) => {
    type === "grid" ? setIsShowGrid(true) : setIsShowGrid(false);
  };
  return (
    <div className={containerFilter}>
      <div className={filterBox}>
        <SelectBox
          isSort
          options={sortOptions}
          getValue={getValueSelect}
          type="sort"
        />
        <CiGrid41
          style={{ fontSize: 25 }}
          onClick={() => handleShowGrid("grid")}
        />
        <div style={{ height: 20, width: 1, backgroundColor: "#e1e1e1" }} />
        <CiBoxList
          style={{ fontSize: 25 }}
          onClick={() => handleShowGrid("listGrid")}
        />
      </div>
      <div className={filterBox}>
        <div style={{ fontSize: 14, color: "#555" }}>Show</div>
        <SelectBox
          type="show"
          isSort={false}
          options={showOptions}
          getValue={getValueSelect}
        />
      </div>
    </div>
  );
};

export default Filter;
