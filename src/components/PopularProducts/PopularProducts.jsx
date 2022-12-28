import React, {useEffect, useState} from 'react';
import products from "../../assets/data/products";
import * as S from "./style"
import {ProductCard} from "../index";


const PopularProducts = () => {
    const [popularProducts,setPopularProducts] = useState([]);
    useEffect(()=>{
        const filterPopularProducts = products.filter(item => item.category === "watch");
        setPopularProducts([...filterPopularProducts])
    },[])
    return (
        <S.PopularProductsContainer>
            <S.PopularProductsTitle>
                <h1>Popular in Category</h1>
            </S.PopularProductsTitle>
            <S.PopularProductsList>
                {popularProducts.map(item=>(
                    <ProductCard data={item}/>
                ))}
            </S.PopularProductsList>

        </S.PopularProductsContainer>
    );
};

export default PopularProducts;