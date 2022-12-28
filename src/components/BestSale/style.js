import styled from "styled-components";

export const BestSaleContainer = styled.section`
    display:grid;
    & .bestsale__title {
      width: 100%;
      text-align: center;
    }
  & .bestsale__products {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    @media (max-width: 768px) {
      grid-template-columns: repeat(2,1fr);
    } @media (max-width: 576px) {
      grid-template-columns: repeat(1,1fr);
    }
  }
`