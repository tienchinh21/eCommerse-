import React from "react";
import style from "./style.module.scss";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import MainLayout from "@components/Layout/Layout";
import Banner from "@components/Banner/Banner";

const HomePage = () => {
  const { container } = style;
  return (
    <div>
      <div className={container}>
        <Header />
        <Banner />
      </div>
    </div>
  );
};

export default HomePage;
