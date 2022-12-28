import styled from "styled-components";

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--hero-bg);
  padding-top: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const HeroContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  & .hero__subtitle {
  }
  & .hero__title {
  }
  & .hero__desc {
  }
  & .hero__action {
    padding: 8px 12px;
    font-size: 1rem;
    background-color: var(--primary-color);
    outline: none;
    border: none;

    color: #fff;
    cursor: pointer;
    &:hover {
      transform: translate(-1px, -1px);
    }
    &:active {
      transform: translate(0, 0);
    }
  }
  @media (max-width: 1200px) {
    gap: 10px;
    & .hero__subtitle {
      font-size: 0.8rem;
    }
    & .hero__title {
      font-size: 1.2rem;
    }
    & .hero__desc {
      font-size: 0.7rem;
    }
    & .hero__action {
    }
  }
  @media (max-width: 768px) {
    align-items: center;
    & .hero__subtitle {
      width: 100%;
      text-align: center;
      font-size: 1rem;
    }
    & .hero__title {
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
    }
    & .hero__desc {
      width: 100%;
      text-align: center;
      font-size: 0.8rem;
    }
    & .hero__action {
      align-self: center;
    }
  }
`;
export const HeroImage = styled.div``;
