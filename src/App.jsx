import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routers from "./routers/routers";
import { Suspense } from "react";
import HomePage from "@components/HomePage/HomePage";
import Blog from "@components/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>.....Loading</div>}>
        <Routes>
          {routers.map((item, index) => (
            <Route path={item.path} element={<item.components />} key={index} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
