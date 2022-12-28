import styled from "styled-components";

export const ServicesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const ServiceItem = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 20px;
  background-color: var(--card-bg-01);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover {
    transform: translate(-1px, -2px);
  }
  .service__text {
    display: flex;
    gap: 5px;
    flex-direction: column;
    @media (max-width: 1200px) {
      & h3 {
        font-size: 1rem;
      }
      & p {
        font-size: 0.8rem;
      }
    }
    @media (max-width: 992px) {
      & h3 {
        font-size: 0.8rem;
      }
      & p {
        font-size: 0.5rem;
      }
    }
  }
  svg {
    font-size: 30px;
  }
`;
