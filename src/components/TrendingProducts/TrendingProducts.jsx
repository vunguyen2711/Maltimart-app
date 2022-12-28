import React from "react";
import * as S from "./styles";
import ProductList from "../ProductList/ProductList";
const TrendingProducts = () => {
  return (
    <S.TrendingProductsContainer>
      <div className="trending__title">
        {" "}
        <h1>Trending Products</h1>
      </div>
      <ProductList />
    </S.TrendingProductsContainer>
  );
};

export default TrendingProducts;
