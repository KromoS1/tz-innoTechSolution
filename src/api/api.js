import axios from "axios";

const api_key = 'c2bd8538cc9a3e3c21ce4b27a81b1714'

const instance = axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5/forecast'
})

export const weatherAPI = {
    getWeatherCity(city){
        return instance.get(`?q=${city}&appid=${api_key}`).then(response => response.data);
    }
}
