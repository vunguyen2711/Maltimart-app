import styled from "styled-components";

export const PopularProductsContainer = styled.section`
  
`
export const PopularProductsTitle = styled.div`
  width: 100%;
  text-align: center;
`

export const PopularProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2,1fr);
  } @media (max-width: 576px) {
  grid-template-columns: repeat(1,1fr);
}
`