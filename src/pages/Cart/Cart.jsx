import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import React from "react";
import Contents from "@/pages/Cart/components/Contents/contents";
import Step from "@/pages/Cart/components/Step/Step";

import style from "./style.module.scss";

const Cart = () => {
  const { container } = style;
  return (
    <>
      <Header />
      <div className={container}>
        <Step />
        <Contents />
      </div>
      <Footer />
    </>
  );
};

export default Cart;
