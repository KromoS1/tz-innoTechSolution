import React, {memo, useCallback} from "react";
import style from './WeatherCity.module.css';
import {useDispatch} from "react-redux";
import {removeCity, updateWeather} from "../../bll/thunks/weaherThunk";
import {Arrow} from "../arrow/Arrow";

export const WeatherCity = memo(({city}) => {

    const dispatch = useDispatch();
    const iconWeather = <img src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`} className={style.icon} alt=""/>

    const remove = useCallback(() => {
        dispatch(removeCity({idCity: city.idCity}));
    },[city.idCity, dispatch])

    const update = useCallback(() => {
        dispatch(updateWeather({city:city.cityName}))
    },[city.cityName, dispatch])

    return (
        <div className={style.container}>
            <span className={style.city}><p>Город: {city.cityName}</p></span>
            <span><p>Температура: {city.temp}°C</p> <p>{iconWeather}</p></span>
            <span><p>Влажность: {city.humidity}%</p></span>
            <span><p>Атмосферное давление: {city.pressure}мм рт. ст.</p></span>
            <span className={style.wind}><p>Сила и направление ветра: {city.speed}м/с </p><Arrow nav={city.deg}/></span>
            <span><p>Последнее обновление данных: {city.dt}</p></span>
            <div className={style.buttons}>
                <button className={style.buttonDel} onClick={remove}>Удалить</button>
                <button className={style.buttonUpdate} onClick={update}>Обновить</button>
            </div>
        </div>
    )
})
