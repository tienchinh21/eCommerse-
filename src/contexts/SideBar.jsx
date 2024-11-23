import { createContext, useState, useEffect } from "react";
import { getCart } from "@/apis/cartService";
import Cookies from "js-cookie";

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [getProductToCart, setGetProductToCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const userId = Cookies.get("userId");

  const handleGetProductToCart = ({ userId, type }) => {
    if (userId && type === "cart") {
      setIsLoading(true);
      getCart(userId)
        .then((res) => {
          console.log("Cart response:", res.data);
          setGetProductToCart(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setGetProductToCart([]);
          setIsLoading(false);
        });
    }
  };

  const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
    handleGetProductToCart,
    getProductToCart,
    isLoading,
  };

  useEffect(() => {
    handleGetProductToCart({ userId, type: "cart" });
  }, []);

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};
