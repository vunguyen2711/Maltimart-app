import React from 'react';
import * as S from "./style";
import CounterImg from "../../assets/images/counter-timer-img.png";
import {Clock} from "../index";


const CounterTime = () => {
    return (
        <S.CounterTimeContainer>
            <S.Counter>
               <Clock/>
            </S.Counter>
            <S.Image>
                <img src={CounterImg} alt=""/>
            </S.Image>
        </S.CounterTimeContainer>
    );
};

export default CounterTime;