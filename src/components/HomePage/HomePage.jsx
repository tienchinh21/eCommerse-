import { useEffect, useState } from "react";
import style from "./style.module.scss";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import Banner from "@components/Banner/Banner";
import AdvanceHealing from "@components/AdvanceHealing/AdvanceHealing";
import Info from "@components/Info/Info";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";
import PopularProduct from "@components/PopularProduct/Popularproduct";
import { getProducts } from "@/apis/productsService";
import SaleHomePage from "@components/SaleHomePage/SaleHomePage";

const HomePage = () => {
  const { container } = style;

  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const query = {
      sortType: 0,
      page: 1,
      limit: 10,
    };
    getProducts(query).then((res) => {
      setListProduct(res.contents);
    });
  }, []);

  return (
    <div>
      <div className={container}>
        <Header />
        <Banner />
        <Info />
        <AdvanceHealing />
        <HeadingListProduct data={listProduct.slice(0, 2)} />
        <PopularProduct data={listProduct.slice(2, 10)} />
        <SaleHomePage />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
