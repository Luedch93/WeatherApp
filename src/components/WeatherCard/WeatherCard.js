import React from 'react';

import moment from 'moment';

import './WeatherCard.scss';

export default function WeatherCard(props) {
    
    const getImg = (item) => {
        return `http://openweathermap.org/img/wn/${item}@2x.png`
    }

    const days = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday'
    }

    const getDay = (textDate) => {
        const dayOfTheWeek = moment(textDate).day();
        return days[dayOfTheWeek];
    }
    
    return (
        <div className="WeatherCard">
            <h3>{getDay(props.data.dt_txt)}</h3>
            <div className="info">
                <img src={getImg(props.data.weather[0].icon)} alt=""/>
                <div className="temperature">
                    <h5 className="max">{props.data.main.temp_max}</h5>
                    <h5 className="min">{props.data.main.temp_min}</h5>
                </div>
            </div>
        </div>
    )
}