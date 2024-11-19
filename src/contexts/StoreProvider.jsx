import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getInfo } from "@/apis/authService";

export const storeContext = createContext();

export const StoreProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(Cookies.get("userId"));

  const handleLogout = () => {
    Cookies.remove("userId");
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    setUserInfo(null);
    window.location.reload();
  };

  useEffect(() => {
    if (userId) {
      getInfo(userId)
        .then((res) => {
          setUserInfo(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  }, [userId]);

  return (
    <storeContext.Provider
      value={{ userInfo, handleLogout, setUserId, userId }}
    >
      {children}
    </storeContext.Provider>
  );
};
