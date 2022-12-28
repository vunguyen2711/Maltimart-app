import React from "react";
import {
    CounterTime,
    Helmet,
    HeroSection,
    Services,
    TrendingProducts,
    BestSale,
    NewArrival,
    PopularProducts
} from "../../components";

const Home = () => {
    return (<>
        <Helmet title="HomePage"></Helmet>

        <HeroSection></HeroSection>
        <Services></Services>
        <TrendingProducts></TrendingProducts>
        <BestSale></BestSale>
        <CounterTime></CounterTime>
        <NewArrival></NewArrival>
        <PopularProducts></PopularProducts>
    </>);
};

export default Home;
