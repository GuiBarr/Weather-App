import React, { useState } from 'react';
import Window from './components/window/Window';
import Modal from './components/modal/Modal';
import Search from './components/search/Search';
import './App.css';

function App() {
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
 
  return (
    <div className='general'>
      {searchVisible && <Search onClick={handleSearchClick} />}
      {modalVisible && <Modal onButtonClick={handleModalButtonClick} />}
      <Window />
    </div>
  );
}

export default App
