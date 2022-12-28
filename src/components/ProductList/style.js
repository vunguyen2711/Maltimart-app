import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: stretch;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;
