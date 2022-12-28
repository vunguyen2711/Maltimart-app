import React from 'react';
import * as S from "./style";
import CounterImg from "../../assets/images/counter-timer-img.png";
const CounterTime = () => {
    return (
        <S.CounterTimeContainer>
            <S.Counter></S.Counter>
            <S.Image>
                <img src={CounterImg} alt=""/>
            </S.Image>
        </S.CounterTimeContainer>
    );
};

export default CounterTime;