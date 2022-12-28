import React, { useEffect, useState } from "react";
import * as S from "./style";
import ProductCard from "../ProductCard/ProductCard";
import productsData from "../../assets/data/products";
const ProductList = () => {
  const [productsTrend, setProductsTrend] = useState([]);
  useEffect(() => {
    const filterChairProducts = productsData.filter(
      (item) => item.category === "chair"
    );
    setProductsTrend([...filterChairProducts]);
  }, []);
  return (
    <S.ProductListContainer>

      {productsTrend.map((item, index) => {
        return <ProductCard key={item.id} data={item} />;
      })}
    </S.ProductListContainer>
  );
};

export default ProductList;
