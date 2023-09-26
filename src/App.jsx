import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Window from './components/window/Window';
import Modal from './components/modal/Modal';
import Search from './components/search/Search';
import './App.css';

function App() {

  //llave API y URL
  const apiKey = '40c34496d9b276fdfc2b20fe6b556db9';
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather'//current data

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
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const locationData = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      console.log('Localização do usuário:', locationData);
        setLocation(locationData);
    });
  }, []);


  return (
    <div className='general'>
      {searchVisible && <Search onClick={handleSearchClick} />}
      {modalVisible && <Modal onButtonClick={handleModalButtonClick} />}
      <Window />
    </div>
  );
}

export default App
