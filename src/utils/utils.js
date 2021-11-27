export const convTemp = (tempKelv) => {
    return Math.round(tempKelv - 273.15);
}

export const convDateAndTime = (unixTime) => {
    const option = {day:'numeric',month:'long',year:'numeric',hour:'numeric',minute:'numeric',second:'numeric'};
    const date = new Date(unixTime*1000).toLocaleString('ru-RU',option);
    return date.slice(0,14) + date.slice(18,27);
}

export const convPressure = (pressure) => {
    return Math.round(pressure/1.333);
}
