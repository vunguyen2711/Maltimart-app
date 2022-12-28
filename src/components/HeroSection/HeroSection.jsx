import React from "react";
import * as S from "./style";
import heroImage from "../../assets/images/hero-img.png";
import {Link} from "react-router-dom";
import {RoutePath} from "../../constants/Route.path";

const HeroSection = () => {
    const year = new Date().getFullYear();
    return (<S.HeroSection>
        <S.HeroImage>
            <img src={heroImage} alt="" srcset=""/>
        </S.HeroImage>
        <S.HeroContent>
            <p className="hero__subtitle">Trending products in year {year} </p>
            <h2 className="hero__title">
                Make trending products become Minimalist
            </h2>


            <p className="hero__desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
                repellat saepe expedita quia inventore repudiandae aliquid laboriosam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <Link to={RoutePath.SHOP}>
                <button className="hero__action">Shop now</button>
            </Link>
        </S.HeroContent>

    </S.HeroSection>);
};

export default HeroSection;
