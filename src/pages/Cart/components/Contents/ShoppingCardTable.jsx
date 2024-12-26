import React from "react";
import CartItem from "./CartItem";
import style from "./ShoppingCardTable.module.scss";

const ShoppingCartTable = () => {
  const { shoppingCart, cartFooter, coupon, clearCart } = style;
  const cartItems = [
    {
      id: 1,
      image: "https://via.placeholder.com/80",
      name: "Consectetur nibh at",
      size: "M",
      price: 119.99,
      sku: "12349",
      quantity: 1,
    },
    {
      id: 2,
      image: "https://via.placeholder.com/80",
      name: "Amet faucibus nunc",
      size: "M",
      price: 1879.99,
      sku: "87654",
      quantity: 1,
    },
  ];

  return (
    <div className={shoppingCart}>
      <table>
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>SKU</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <div className={cartFooter}>
        <div className={coupon}>
          <input type="text" placeholder="Coupon code" />
          <button>OK</button>
        </div>
        <button className={clearCart}>CLEAR SHOPPING CART</button>
      </div>
    </div>
  );
};

export default ShoppingCartTable;
