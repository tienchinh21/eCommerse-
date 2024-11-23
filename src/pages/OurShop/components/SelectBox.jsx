import React from "react";
import style from "../style.module.scss";
import classNames from "classnames";

const SelectBox = ({ options, getValue, isSort = true, type }) => {
  const { selectBox, sort, show } = style;
  return (
    <select
      className={classNames(selectBox, {
        [sort]: isSort,
        [show]: !isSort,
      })}
      onChange={(e) => getValue(e.target.value, type)}
    >
      {options.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectBox;
