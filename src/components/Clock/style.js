import styled from "styled-components";

export const ClockContainer = styled.div`
  color: #FFF;
  display: flex;
flex-direction: column;
  gap: 10px;
`
export const ClockText = styled.div`
 & h1 {
   font-size: 32px;
 }
  
`
export const Clock = styled.div`
  display: flex;
  gap: 20px;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`
export const ClockContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
`
export const ClockButton = styled.button`
  width: 100px;
  color: var(--primary-color);
  background-color: #fff;
  border: none;
  outline: none;
  padding: 4px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 10px;
  }
`