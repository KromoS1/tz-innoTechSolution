import {createAsyncThunk} from "@reduxjs/toolkit";
import {weatherAPI} from "../../api/api";
import {citiesActions} from "../reducers/citiesReducer";
import {convDateAndTime, convPressure, convTemp} from "../../utils/utils";

export const init = createAsyncThunk(
    'weather/initApp',
    async (_, {dispatch}) => {
        dispatch(citiesActions.setCities(JSON.parse(localStorage.getItem('cities'))));
    }
)

export const getWeather = createAsyncThunk(
    'weather/getWeather',
    async ({city}, {dispatch}) => {
        try {
            const data = await weatherAPI.getWeatherCity(city);
            if (data.cod === '200') {
                const dataWeather = {
                    idCity: data.city.id,
                    cityName: data.city.name,
                    dt: convDateAndTime(data.list[0].dt),
                    temp: convTemp(data.list[0].main.temp),
                    pressure: convPressure(data.list[0].main.pressure),
                    humidity: data.list[0].main.humidity,
                    icon: data.list[0].weather[0].icon,
                    speed: data.list[0].wind.speed,
                    deg: data.list[0].wind.deg,
                }
                const cities = JSON.parse(localStorage.getItem('cities'));
                if (cities) {
                    localStorage.setItem(`cities`, JSON.stringify([...cities, dataWeather]))
                } else {
                    localStorage.setItem(`cities`, JSON.stringify([dataWeather]))
                }
                dispatch(citiesActions.setCities([dataWeather]))
            }
        } catch (e) {
            alert(e.message);
        }
    }
)

export const updateWeather = createAsyncThunk(
    'weather/update',
    async ({city}, {dispatch}) => {
        try {
            const data = await weatherAPI.getWeatherCity(city);
            if (data.cod === '200') {
                const dataWeather = {
                    idCity: data.city.id,
                    cityName: data.city.name,
                    dt: convDateAndTime(data.list[0].dt),
                    temp: convTemp(data.list[0].main.temp),
                    pressure: convPressure(data.list[0].main.pressure),
                    humidity: data.list[0].main.humidity,
                    icon: data.list[0].weather[0].icon,
                    speed: data.list[0].wind.speed,
                    deg: data.list[0].wind.deg,
                }
                const cities = JSON.parse(localStorage.getItem('cities'));
                const updateCities = cities.filter(city => city.idCity === dataWeather.idCity ? dataWeather : city)
                localStorage.setItem(`cities`, JSON.stringify(updateCities))
                dispatch(citiesActions.updateCity(dataWeather))
            }
        } catch (e) {
            alert(e.message);
        }
    }
)

export const removeCity = createAsyncThunk(
    'weather/removeCity',
    async ({idCity}, {dispatch}) => {
        dispatch(citiesActions.removeCity({id: idCity}));
        const cities = JSON.parse(localStorage.getItem('cities'));
        const filterCity = cities.filter(city => city.idCity !== idCity)
        localStorage.setItem('cities', JSON.stringify(filterCity))
    }
)

export const autoUpdateFiveSec = createAsyncThunk(
    'weather/auto',
    async (_, {getState, dispatch}) => {
        const names = getState().cities.map(city => city.cityName);
        try{

        } catch (e) {
            alert(e.message);
        }
    }
)
