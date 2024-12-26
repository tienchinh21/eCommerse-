import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./CardItem.module.scss";

const CartItem = ({ item }) => {
  const { cartItem, productInfo } = style;
  const { image, name, size, price, sku, quantity } = item;

  return (
    <tr className={cartItem}>
      <td>
        <div className={productInfo}>
          <img src={image} alt={name} />
          <div>
            <p>{name}</p>
            <span>Size: {size}</span>
          </div>
        </div>
      </td>
      <td>
        <button className={style.deleteButton}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
      <td>${price.toFixed(2)}</td>
      <td>{sku}</td>
      <td>
        <select value={quantity}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </td>
      <td>${(price * quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CartItem;
