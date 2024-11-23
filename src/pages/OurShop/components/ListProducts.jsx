import React, { useContext } from "react";
import { IoReload } from "react-icons/io5";
import { OurShopContext } from "@/contexts/OurShopProvier";
import MainLayout from "@components/Layout/Layout";
import ProductItem from "@components/ProductItem/ProductItem";
import style from "../style.module.scss";
import Button from "@components/Button/Button";

const ListProducts = () => {
  const {
    products,
    isShowGrid,
    isLoading,
    handleLoadMore,
    total,
    isLoadingMoreButton,
  } = useContext(OurShopContext);
  const { sectionListProduct, containerProduct, animationLoading } = style;
  return (
    <div className={sectionListProduct}>
      <MainLayout>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className={[isShowGrid ? containerProduct : ""]}>
              {products.map((item) => (
                <ProductItem
                  key={item.id}
                  src={item.images[0]}
                  preSrc={item.images[1]}
                  name={item.name}
                  price={item.price}
                  details={item}
                  isHomePage={false}
                />
              ))}
            </div>
            {total > products.length && (
              <div style={{ marginTop: "20px" }}>
                <Button
                  onClick={handleLoadMore}
                  isPrimary={false}
                  content={
                    isLoadingMoreButton ? (
                      <IoReload className={animationLoading} />
                    ) : (
                      "LOAD MORE PRODUCT"
                    )
                  }
                />
              </div>
            )}
          </>
        )}
      </MainLayout>
    </div>
  );
};

export default ListProducts;
