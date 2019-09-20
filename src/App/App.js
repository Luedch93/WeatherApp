import React from 'react';
import './App.scss';

import SearchInput from "../components/SearchInput/SearchInput";
import WeatherList from "../components/WeatherList/WeatherList";

function App() {
  return (
    <div className="App">
      <h2>Weather Application</h2>
      <SearchInput></SearchInput>
      <WeatherList></WeatherList>
    </div>
  );
}

export default App;
