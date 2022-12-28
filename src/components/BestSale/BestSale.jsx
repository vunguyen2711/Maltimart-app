import React, {useEffect, useState} from 'react';
import * as S from "./style"
import products from "../../assets/data/products";
import ProductCard from "../ProductCard/ProductCard";


const BestSale = () => {
    const [bestSaleProducts,setBestSaleProducts] = useState([]);
    useEffect(()=>{
        const filterBestSaleProducts = products.filter(item=>item.category==="sofa");
        console.log(filterBestSaleProducts)
        setBestSaleProducts([...filterBestSaleProducts]);
    },[])
    return (
        <S.BestSaleContainer>
            <div className="bestsale__title">
                <h1>Best Sale</h1>
            </div>
            <div className={"bestsale__products"}>
                {bestSaleProducts.map((item,index)=>{
                    return (
                        <ProductCard key={item.id} data={item}/>
                    )
                })}
            </div>


        </S.BestSaleContainer>
    );
};

export default BestSale;