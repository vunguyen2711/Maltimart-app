import styled from "styled-components";

export const NewArrivalContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  
  
`
export const NewArrivalTitle = styled.div`
 width: 100%;
 text-align: center;
`
export const NewArrivalProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2,1fr);
  } @media (max-width: 576px) {
  grid-template-columns: repeat(1,1fr);
}
  
`