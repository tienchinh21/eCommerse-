import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import React from "react";
import Contents from "@/pages/Cart/components/Contents/Contents";
import Step from "@/pages/Cart/components/Step/Step";
import style from "./style.module.scss";
import MainLayout from "@components/Layout/Layout";

const Cart = () => {
  const { container } = style;
  return (
    <>
      <Header />
      <div className={container}>
        <Step />
        <MainLayout>
          <Contents />
        </MainLayout>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
