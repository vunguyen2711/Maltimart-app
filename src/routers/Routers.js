import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import {
  Cart,
  Checkout,
  Home,
  Login,
  ProductDetail,
  Shop,
  Signup,
} from "../pages";
import { RoutePath } from "../constants/Route.path";
const Routers = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to={RoutePath.HOME} />} />
        <Route path={RoutePath.HOME} element={<Home />} />
        <Route path={RoutePath.CART} element={<Cart />} />
        <Route path={RoutePath.LOGIN} element={<Login />} />
        <Route path={RoutePath.CHECK_OUT} element={<Checkout />} />
        <Route path={RoutePath.PRODUCT_DETAIL} element={<ProductDetail />} />
        <Route path={RoutePath.SHOP} element={<Shop />} />
        <Route path={RoutePath.SIGN_UP} element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default Routers;
