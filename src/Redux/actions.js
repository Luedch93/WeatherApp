export const setSearchValue = value => ({
  type: 'SET_SEARCH_VAL',
  payload: {
    value
  }
});

export const setWeatherInfo = list => ({
    type: 'SET_WEATHER_DATA',
    payload: {
        weatherList: list
    }
})