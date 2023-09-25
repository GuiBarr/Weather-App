import React, {useState} from 'react';
import './Search.css';


function Search({ onClick }) {

  return (
    <div className='left-container'>
        <nav className='search-bar'>
            <input type='text'
            className='search-menu' 
            placeholder='Search for places' 
            onClick={onClick} />  
            <button>location</button>
        </nav>
        <div className='background-com-imagem'>
            <img src='weather-app-master\weather-app-master\Shower.png' alt='weather' className='imagem-sobreposta'></img>
        </div>
        <div className='div-temp'>
            <div className='temperature'>
                <h1>15</h1>
                <h3>ºC</h3>
            </div>
            <div className=''>
                <p className='climate'>Shower</p>
            </div>
        </div>
        <div className='date-location'>
            <h4 className='date'>Today - Fri, 5 Jun</h4>
            <div className='location'>
                <img></img>
                <h4>Helsinki</h4>
            </div>
        </div>
    </div>
    
  );
}

export default Search
