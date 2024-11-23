import React from "react";
import MyHeader from "@components/Header/Header";
import MainLayout from "@components/Layout/Layout";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import Banner from "./components/Banner";
import { OurShopProvider } from "@/contexts/OurShopProvier";
import Filter from "@/pages/OurShop/components/Filter";
import ListProducts from "@/pages/OurShop/components/ListProducts";
import Footer from "@components/Footer/Footer";

const OurShop = () => {
  const { container, FnBox, special, btnBack } = style;

  const navigate = useNavigate();

  const handleBackPrePage = () => {
    navigate(-1);
  };
  return (
    <OurShopProvider>
      <MyHeader />
      <MainLayout>
        <div className={container}>
          <div className={FnBox}>
            <div>
              Home &gt; <span className={special}>Shop</span>{" "}
            </div>
            <div className={btnBack} onClick={() => handleBackPrePage()}>
              Return to previous page
            </div>
          </div>
        </div>
        <Banner />
        <Filter />
        <ListProducts />
      </MainLayout>
      <Footer />
    </OurShopProvider>
  );
};

export default OurShop;
