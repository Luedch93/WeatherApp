import React from 'react';
import { connect } from 'react-redux';

import { getWeather } from '../../Redux/selectors';

import WeatherCard from '../../components/WeatherCard/WeatherCard';

import './WeatherList.scss';

function WeatherList({ weatherList }) {
  return (
    <div className="WeatherList">
      {weatherList.map((w, i) => (
        <WeatherCard data={w} key={i}></WeatherCard>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  const weatherList = getWeather(state);
  return { weatherList };
};

export default connect(mapStateToProps)(WeatherList);
