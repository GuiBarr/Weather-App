import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Search.css';



function Search({ onClick, location, apiKey, apiUrl }) {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (location) {
            const queryParams = `?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}`;
            const fullUrl = apiUrl + queryParams;
            console.log('URL da API:', fullUrl);
        axios.get(fullUrl)
            .then((response) => {
                console.log('Dados da API recebidos:', response.data);
                const weatherData =response.data;
                setWeatherData(weatherData);
        })
            .catch((error) => {
                console.error('no se pudo cargar los datos:', error);
        });
    } 
  }, [location, apiKey, apiUrl]);

  console.log('Dados do clima:', weatherData);

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
                <h1>{weatherData?.main.temp}</h1>
                <h3>ºC</h3>
            </div>
            <div className=''>
                <p className='climate'>{weatherData?.weather.main}</p>
            </div>
        </div>
        <div className='date-location'>
            <h4 className='date'>Today - Fri, 5 Jun</h4>
            <div className='location'>
                <img></img>
                <h4>{weatherData?.name}</h4>
            </div>
        </div>
    </div>
    
  );
}

export default Search
