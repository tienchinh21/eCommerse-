import React, { useContext, useEffect, useState } from "react";
import style from "./style.module.scss";
import cartIcon from "../../assets/icon/svgs/cart.svg";
import reloadIcon from "../../assets/icon/svgs/reloadicon.svg";
import heartIcon from "../../assets/icon/svgs/hearticon.svg";
import classNames from "classnames";
import Button from "@components/Button/Button";
import Cookies from "js-cookie";
import { OurShopContext } from "@/contexts/OurShopProvier";
import { ToastContext } from "@/contexts/ToastProvider";
import { SideBarContext } from "@/contexts/SideBar";
import { addCart } from "@/apis/cartService";

const ProductItem = ({
  src,
  preSrc,
  name,
  price,
  details,
  isHomePage = true,
}) => {
  const {
    boxImg,
    showMessWhenHover,
    showFnWhenHover,
    boxIcon,
    title,
    priceCl,
    boxSize,
    sizeBtn,
    textCenter,
    isShowGridItem,
    isShowGridItem2,
    largeImg,
    isActiveSize,
    btnClearSize,
  } = style;

  const [sizeChoose, setSizeChoose] = useState("");
  const ourShopStore = useContext(OurShopContext);
  const { toast } = useContext(ToastContext);
  const { setIsOpen, setType, handleGetProductToCart } =
    useContext(SideBarContext);
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const userId = Cookies.get("userId");

  const handleAddToCart = () => {
    if (!userId) {
      setIsOpen(true);
      setType("login");
      toast.warning("Please login to add to cart");
      return;
    }

    if (!sizeChoose) {
      toast.warning("Please choose size");
      return;
    }

    const data = {
      userId,
      productId: details._id,
      quantity: 1,
      size: sizeChoose,
    };

    addCart(data)
      .then((res) => {
        setIsOpen(true);
        setType("cart");
        handleGetProductToCart({ userId, type: "cart" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };

  const handleClearSize = () => {
    setSizeChoose("");
  };

  useEffect(() => {
    isHomePage ? setIsShowGrid(true) : setIsShowGrid(ourShopStore?.isShowGrid);
  }, [isHomePage, ourShopStore?.isShowGrid]);

  return (
    <div
      style={{ margin: "10px 0px" }}
      className={!isShowGrid ? isShowGridItem : ""}
    >
      <div className={classNames(boxImg, { [largeImg]: !isShowGrid })}>
        <img src={src} alt="" />
        <img src={preSrc} alt="" className={showMessWhenHover} />
        <div className={showFnWhenHover}>
          <div className={boxIcon}>
            <img src={reloadIcon} alt="reloadIcon" />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt="heartIcon" />
          </div>
          <div className={boxIcon}>
            <img src={cartIcon} alt="cartIcon" />
          </div>
          <div className={boxIcon}>
            <img src={cartIcon} alt="cartIcon" />
          </div>
        </div>
      </div>
      <div className={!isShowGrid ? isShowGridItem2 : ""}>
        {/* size */}
        {!isHomePage && (
          <div className={boxSize}>
            {details.size.map((item, index) => (
              <div
                onClick={() => handleChooseSize(item.name)}
                className={classNames(sizeBtn, {
                  [isActiveSize]: item.name === sizeChoose,
                })}
                key={index}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
        {sizeChoose && (
          <div onClick={() => handleClearSize()} className={btnClearSize}>
            clear
          </div>
        )}
        <div
          className={classNames(title, {
            [textCenter]: !isHomePage,
          })}
        >
          {name}
        </div>
        {!isHomePage && (
          <div style={{ margin: "6px 0px" }} className={textCenter}>
            Bran 01
          </div>
        )}
        <div
          className={classNames(priceCl, {
            [textCenter]: !isHomePage,
          })}
        >
          ${price}
        </div>
        {!isHomePage && (
          <div style={{ marginTop: 6 }}>
            <Button onClick={handleAddToCart} content={"Add To Card"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
