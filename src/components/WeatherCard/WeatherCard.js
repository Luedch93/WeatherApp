import React from 'react';

import moment from 'moment';

import './WeatherCard.scss';

export default function WeatherCard(props) {
  const getImg = item => {
    return `http://openweathermap.org/img/wn/${item}@2x.png`;
  };

  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };

  const getDay = textDate => {
    const dayOfTheWeek = moment(textDate).day();
    return days[dayOfTheWeek];
  };

  return (
    <div className="WeatherCard">
      <h3>{getDay(props.data.dt_txt)}</h3>
      <div className="info">
        <img
          alt={props.data.weather[0].description}
          title={props.data.weather[0].description}
          src={getImg(props.data.weather[0].icon)}
        />
        <div className="temperature">
          <div className="max">
            <h5>max</h5>
            <h5>{props.data.main.temp_max}</h5>
          </div>
          <div className="min">
            <h5>min</h5>
            <h5>{props.data.main.temp_min}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
