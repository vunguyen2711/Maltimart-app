import React, {useEffect, useState} from 'react';
import * as S from "./style.js"
import products from "../../assets/data/products";
import {ProductCard} from "../index"
const NewArrival = () => {
    const [mobileProducts,setMobileProducts] = useState([]);
    const [wirelessProducts,setWirelessProducts] = useState([]);
    useEffect(()=>{
        const filterMobileProducts = products.filter(item => item.category === "mobile");
        const filterWirelessProducts = products.filter(item => item.category === "wireless");
        setMobileProducts([...filterMobileProducts]);
        setWirelessProducts([...filterWirelessProducts]);
    },[])
    return (
        <S.NewArrivalContainer>
            <S.NewArrivalTitle>
                <h1>New Arrival</h1>
            </S.NewArrivalTitle>
            <S.NewArrivalProducts>
                {mobileProducts.map(item => (
                    <ProductCard key={item.id} data={item}/>
                ))} {wirelessProducts.map(item => (
                    <ProductCard key={item.id} data={item}/>
                ))}
            </S.NewArrivalProducts>
        </S.NewArrivalContainer>
    );
};

export default NewArrival;