import styled from "styled-components";

export const CounterTimeContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-items: center;
  background-color: var(--primary-color);
  height: fit-content;
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1,1fr);
  }
`
export const Counter = styled.div`

`
export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70%;
  margin: 0 auto;

`