import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {init} from "./bll/thunks/weaherThunk";
import {WeatherCity} from "./components/weather/WeatherCity";
import {SearchInput} from "./components/search/SearchInput";

function App() {
    const cities = useSelector(state => state.cities);
    const dispatch = useDispatch();

    const weatherCities = cities.map(city => {
        return <WeatherCity key={city.idCity} city={city}/>
    })

    useEffect(() => {
        dispatch(init());
    }, [])

    return (
        <div className={"App"}>
            <SearchInput/>
            <div className={'Content'}>
                {weatherCities}
            </div>
        </div>

    );
}

export default App;
