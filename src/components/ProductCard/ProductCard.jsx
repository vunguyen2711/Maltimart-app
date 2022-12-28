import React from "react";
import ProductImage from "../../assets/images/arm-chair-01.jpg";
import * as S from "./style";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link, generatePath } from "react-router-dom";
import { RoutePath } from "../../constants/Route.path";
const ProductCard = ({ data }) => {
  const { id, imgUrl, price, category, productName } = data;
  return (
    <S.ProductCardContainer>
      <Link
        to={generatePath(RoutePath.PRODUCT_DETAIL, {
          id: id,
        })}
      >
        <S.ProductImg>
          <img src={imgUrl} alt="" />
        </S.ProductImg>
      </Link>

      <Link
        to={generatePath(RoutePath.PRODUCT_DETAIL, {
          id: id,
        })}
      >
        <h3 className="product__name">{productName}</h3>
      </Link>

      <span className="product__category">{category}</span>
      <div className="product__action">
        <span className="product__price">${price}</span>
        <button className="product__button">
          <AiOutlinePlusCircle /> Add To Cart
        </button>
      </div>
    </S.ProductCardContainer>
  );
};

export default ProductCard;
