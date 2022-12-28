import styled from "styled-components";

export const ProductCardContainer = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & .product__name {
    flex: 1;
    width: 100%;
    font-size: 1.1rem;
    text-align: center;
    color: var(--primary-color);
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
  & .product__category {
    margin-top: auto;
  }
  & .product__action {
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;

    & .product__price {
      color: var(--small-text-color);
    }
    & .product__button {
      padding: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      color: #fff;
      font-size: 1.1rem;
      font-weigth: bold;
      background-color: var(--primary-color);
      border-radius: 5px;
      transition: 0.2s all linear;
      &:hover {
        transform: translate(-4px, -4px);
        box-shadow: 4px 5px 10px 0px #000;
      }
      &:active {
        transform: translate(0, 0);
        box-shadow: 0px 0px 0px 0px;
      }
      @media (max-width: 992px) {
        font-size: 0.8rem;
      }
    }
  }
`;
export const ProductImg = styled.div`
  transition: all 0.2s linear;
  &:hover {
    transform: scale(0.9);
  }
  & img {
    width: 100%;
    object-fit: contain;
    cursor: pointer;
    object-position: center;
    &:hover {
      transform: translateY(-2px);
    }
  }
`;
