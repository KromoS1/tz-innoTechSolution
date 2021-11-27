import React from "react";
import style from './Arrow.module.css';
import arrow from './arrow.png';

export const Arrow = ({nav}) => {
    return (
        <span className={style.compass} id='arrow-deg' >
            <img className={style.arrow} src={arrow} style={{transform: `rotate(${-90+nav}deg)`}} alt="#"/>
        </span>
    )
}

