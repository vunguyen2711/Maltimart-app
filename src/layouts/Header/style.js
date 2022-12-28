import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding-top: 2rem;
`;
export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  & img {
    width: 40px;
    height: 40px;
  }
`;
export const LogoName = styled.div`
  & h1 {
    font-size: 1.2rem;
    color: var(--primary-color);
    font-weight: 7 00;
  }
`;
export const Menu = styled.ul`
  display: none;
  align-items: center;
  gap: 2.7rem;
  @media (min-width: 768px) {
    display: flex;
  }
  & li {
    color: var(--primary-color);
    font-weight: 700;
    cursor: pointer;
    &:hover {
      color: red;
    }
    &.isActive {
      color: red;
    }
  }
`;
export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & svg {
    font-size: 1.3rem;
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
  & img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  & .mobile__menu-icon {
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const CartIconContainer = styled.div`
  position: relative;
`;
export const FavouriteIconContainer = styled.div`
  position: relative;
`;
export const Badge = styled.div`
  position: absolute;
  top: -50%;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  color: #fff;
  font-weight: 600;
  font-size: 0.8rem;
  border-radius: 100%;
  padding: 5px;

  width: 1.2rem;
  height: 1.2rem;
`;
