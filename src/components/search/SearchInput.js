import React, {memo, useCallback, useState} from "react";
import cities from '../../source/city.list.json';
import style from './SearchInput.module.css';
import {useDispatch} from "react-redux";
import {getWeather} from "../../bll/thunks/weaherThunk";

export const SearchInput = memo(() => {

    const [value, setValue] = useState('');
    const [citiesFilter, setCitiesFilter] = useState([])
    const dispatch = useDispatch();

    const requestWeather = useCallback(() => {
        const opts = document.getElementById('city').childNodes;
        const valueIpt = document.getElementById('input').value;
        for (let i = 0; i < opts.length; i++) {
            if (opts[i].value === valueIpt) {
                dispatch(getWeather({city: valueIpt}));
                break;
            }
        }
    }, [dispatch])

    const cityCheck = useCallback(async () => {
        return new Promise((res, _) => {
            const temp = cities.filter(c => c.name.search(value) !== -1);
            temp && res(temp);
        })
    }, [value])

    const change = (e) => {
        setValue(e.currentTarget.value.trim());
        cityCheck().then(temp => setCitiesFilter(temp.slice(0, 30)));
    }

    return (
        <div className={style.container}>
            <input list={"city"} id='input' className={style.input}
                   value={value} onInput={requestWeather} onChange={change}/>
            <datalist id="city">
                {citiesFilter.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
            </datalist>
        </div>
    )
})
