import { createContext, useEffect, useState } from "react";
import { getProducts } from "@/apis/productsService";

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
  const sortOptions = [
    { label: "Default sorting", value: "0" },
    { label: "Sort by popularity", value: "1" },
    { label: "Sort by average rating", value: "2" },
    { label: "Sort by latest", value: "3" },
    { label: "Sort by price: low to high", value: "4" },
    { label: "Sort by price: high to low", value: "5" },
  ];

  const showOptions = [
    { label: "8", value: "8" },
    { label: "12", value: "12" },
    { label: "All", value: "all" },
  ];

  const [sort, setSort] = useState("0");
  const [show, setShow] = useState("8");
  const [isShowGrid, setIsShowGrid] = useState(true);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoadingMoreButton, setIsLoadingMoreButton] = useState(false);

  const handleLoadMore = () => {
    const query = {
      sortType: sort,
      page: +page + 1,
      limit: show,
    };
    setIsLoadingMoreButton(true);
    getProducts(query)
      .then((res) => {
        setProducts((prev) => [...prev, ...res.contents]);
        setPage(+res.page);
        setTotal(res.total);
        setIsLoading(false);
        setIsLoadingMoreButton(false);
      })
      .catch((err) => console.log(err));
  };

  const values = {
    sortOptions,
    showOptions,
    setSort,
    setShow,
    setIsShowGrid,
    isShowGrid,
    products,
    isLoading,
    handleLoadMore,
    total,
    isLoadingMoreButton,
  };

  useEffect(() => {
    const query = {
      sortType: sort,
      page: 1,
      limit: show,
    };
    setIsLoading(true);
    getProducts(query)
      .then((res) => {
        setProducts(res.contents);
        setTotal(res.total);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [sort, show]);

  return (
    <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>
  );
};
