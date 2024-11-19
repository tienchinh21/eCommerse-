import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routers from "./routers/routers";
import { Suspense } from "react";
import HomePage from "@components/HomePage/HomePage";
import Blog from "@components/Blog/Blog";
import { SideBarProvider } from "@/contexts/SideBar";
import SideBar from "@components/SideBar/SideBar";
import { ToastProvider } from "@/contexts/ToastProvider";
import { StoreProvider } from "@/contexts/StoreProvider";
function App() {
  return (
    <StoreProvider>
      <ToastProvider>
        <SideBarProvider>
          <SideBar />
          <BrowserRouter>
            <Suspense fallback={<div>.....Loading</div>}>
              <Routes>
                {routers.map((item, index) => (
                  <Route
                    path={item.path}
                    element={<item.components />}
                    key={index}
                  />
                ))}
              </Routes>
            </Suspense>
          </BrowserRouter>
        </SideBarProvider>
      </ToastProvider>
    </StoreProvider>
  );
}

export default App;
