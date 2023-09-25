import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Window from './components/window/Window';
import Modal from './components/modal/Modal';
import Search from './components/search/Search';
import './App.css';

function App() {

  // mostrar o ocultar Search/Modal
  const [modalVisible, setModalVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(true);

  const handleSearchClick = () => {
    setSearchVisible(false);
    setModalVisible(true);
  };
  
  const handleModalButtonClick = () => {
    setModalVisible(false);
    setSearchVisible(true);
  };

  //Ubicación del usuario
  const [location, setLocation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, []);

  //guardar los datos de la API
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'en',
        units: 'metric'
      }
    });
    setWeather(res.data);
  }

  return (
    <div className='general'>
      {searchVisible && <Search onClick={handleSearchClick} />}
      {modalVisible && <Modal onButtonClick={handleModalButtonClick} />}
      <Window />
    </div>
  );
}

export default App
