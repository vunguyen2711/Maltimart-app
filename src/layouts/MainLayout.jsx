import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./";
const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
