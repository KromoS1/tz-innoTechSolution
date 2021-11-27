import React, {memo, useState} from "react";
import style from './autoUpdate.module.css';

export const AutoUpdate = memo(() => {
    const [check, setCheck] = useState(false);

    const change = (e) => {
        setCheck(e.currentTarget.checked);
    }

    return (
        <span className={style.container}>
            <p>Автообновление 5с </p>
            <input type="checkbox" checked={check} onChange={change} className={style.check}/>
        </span>
    )
})
