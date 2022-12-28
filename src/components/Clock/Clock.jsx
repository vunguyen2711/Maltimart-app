import React, {useEffect, useState} from 'react';
import * as S from "./style.js"
import {generatePath, Link} from "react-router-dom";
import {RoutePath} from "../../constants/Route.path";
const Clock = () => {
    const [days,setDays] = useState();
    const [hours,setHours] = useState();
    const [minutes,setMinutes] = useState();
    const [seconds,setSeconds] = useState();
    const countDown = () => {
        const currentDate = new Date();
        const expectedDate = new Date('1-1-2023');
        let distanceBetweenDates = expectedDate - currentDate;

        let days = Math.round(distanceBetweenDates / 1000 / 60 / 60 / 24);
        let hours = Math.round(distanceBetweenDates/1000/60/60%24);
        let minutes = Math.round(distanceBetweenDates/1000/60%60);
        let seconds = Math.round(distanceBetweenDates/1000%60);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);

    }

    useEffect(()=>{
     const countInterval = setInterval(countDown,1000);
     return () => {
         clearInterval((countInterval))
     }
    })

    return (
        <S.ClockContainer>
            <S.ClockText>
                <h1>Limited Offers</h1>
                <h3>Quality Aim Chair</h3>
            </S.ClockText>
            <S.Clock>
               <S.ClockContent>
                   <h1 id="days">{days}</h1>
                   <p className="clock__text">Days</p>
               </S.ClockContent>
                <span>:</span><S.ClockContent>
                   <h1 id="hours">{hours}</h1>
                   <p className="clock__text">Hours</p>
               </S.ClockContent>
                <span>:</span><S.ClockContent>
                   <h1 id="minutes">{minutes}</h1>
                   <p className="clock__text">Minutes</p>
               </S.ClockContent>
                <span>:</span><S.ClockContent>
                   <h1 id="seconds">{seconds}</h1>
                   <p className="clock__text">Seconds</p>
               </S.ClockContent>

            </S.Clock>
            <S.ClockButton>
                <Link to={generatePath(RoutePath.SHOP)}>
                    Visit Store
                </Link>

            </S.ClockButton>
        </S.ClockContainer>
    );
};

export default Clock;