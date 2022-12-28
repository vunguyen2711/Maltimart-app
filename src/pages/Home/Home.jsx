import React from "react";
import {CounterTime, Helmet, HeroSection, Services,TrendingProducts,BestSale} from "../../components";

const Home = () => {
    return (<>
        <Helmet title="HomePage"></Helmet>

        <HeroSection></HeroSection>
        <Services></Services>
        <TrendingProducts></TrendingProducts>
        <BestSale></BestSale>
        <CounterTime></CounterTime>
    </>);
};

export default Home;
