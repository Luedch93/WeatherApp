import React, { useState } from 'react';
import axios from 'axios';
import Popup from 'react-popup';

import { connect } from 'react-redux';
import { setSearchValue, setWeatherInfo } from '../../Redux/actions';

import { APP_ID } from '../../api_key';

import './SearchInput.scss';

function SearchInput(props) {
  const [search, setSearch] = useState('');

  const handleInput = e => {
    setSearch(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    try {
      props.setSearchValue(search);
      const {
        status,
        data: { list },
      } = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&APPID=${APP_ID}`,
      );

      if (status === 200) {
        const first = list[0];
        const second = list[8];
        const third = list[16];
        const fourth = list[24];
        const fifth = list[32];
        props.setWeatherInfo([first, second, third, fourth, fifth]);
      }
    } catch (error) {
      console.log(error);
      props.setWeatherInfo([]);
      Popup.alert('The city/country is invalid please check it again');
    }
  };

  return (
    <div itemID="search-box">
      <input
        type="text"
        placeholder="Search the city or country"
        value={search}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
      ></input>
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default connect(
  null,
  { setSearchValue, setWeatherInfo },
)(SearchInput);
