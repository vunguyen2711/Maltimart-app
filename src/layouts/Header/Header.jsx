import React, { useEffect, useState } from "react";
import * as S from "./style";
import Logo from "../../assets/images/eco-logo.png";
import UserIcon from "../../assets/images/user-icon.png";
import { RoutePath } from "../../constants/Route.path";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
const menuLinks = [
  {
    display: "Home",
    route: RoutePath.HOME,
  },
  {
    display: "Shop",
    route: RoutePath.SHOP,
  },
  {
    display: "Cart",
    route: RoutePath.CART,
  },
];
const Header = () => {
  let { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <S.Header>
        <S.Navbar>
          <S.Logo>
            <img src={Logo} alt="" />
            <S.LogoName>
              <h1>Multimart</h1>
              <p>Since 1995</p>
            </S.LogoName>
          </S.Logo>
          <S.Menu>
            {menuLinks.map((menuLink, index) => (
              <li
                key={index}
                className={pathname === menuLink.route ? `isActive` : ``}
              >
                <NavLink act="is__active" to={menuLink.route}>
                  {menuLink.display}
                </NavLink>
              </li>
            ))}
          </S.Menu>
          <S.NavIcons>
            <S.FavouriteIconContainer>
              <MdOutlineFavoriteBorder />
              <S.Badge>1</S.Badge>
            </S.FavouriteIconContainer>
            <S.CartIconContainer>
              <AiOutlineShoppingCart />
              <S.Badge>2</S.Badge>
            </S.CartIconContainer>
            <motion.img whileTap={{ scale: 1.2 }} src={UserIcon} alt="" />
            <AiOutlineMenu className="mobile__menu-icon"></AiOutlineMenu>
          </S.NavIcons>
        </S.Navbar>
      </S.Header>
    </>
  );
};

export default Header;
