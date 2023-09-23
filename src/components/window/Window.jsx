import React from 'react'
import './Window.css'

function Window() {
  return (
    <main className='back-container'>
      <menu className='left-container'>
        <nav className='search-bar'>
            <input type='text'className='search-menu' placeholder='Search for places'></input>  
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
                <image></image>
                <h4>Helsinki</h4>
            </div>
        </div>
      </menu>

      {/*  */}

      <content className='right-container'>
        <div className='scale'>
            <div className='btns'>
            <button className='btn-scale'>°C</button>
            <button className='btn-scale'>°F</button>
            </div>
        </div>
        <div className='cards'>
            <div className='card'>
                <h4>Tomorrow</h4>
                <img className='img-card' src='weather-app-master\weather-app-master\Shower.png' alt='weather' />
                <div className='temp-card'>
                    <div>
                    <h4>16°C</h4>
                    <h4>22°C</h4>
                    </div>
                </div>
            </div>
            <div className='card'>
                <h4>Tomorrow</h4>
                <img className='img-card' src='weather-app-master\weather-app-master\Shower.png' alt='weather' />
                <div className='temp-card'>
                    <div>
                    <h4>16°C</h4>
                    <h4>22°C</h4>
                    </div>
                </div>
            </div>
            <div className='card'>
                <h4>Tomorrow</h4>
                <img className='img-card' src='weather-app-master\weather-app-master\Shower.png' alt='weather' />
                <div className='temp-card'>
                    <div>
                    <h4>16°C</h4>
                    <h4>22°C</h4>
                    </div>
                </div>
            </div>
            <div className='card'>
                <h4>Tomorrow</h4>
                <img className='img-card' src='weather-app-master\weather-app-master\Shower.png' alt='weather' />
                <div className='temp-card'>
                    <div>
                    <h4>16°C</h4>
                    <h4>22°C</h4>
                    </div>
                </div>
            </div>
            <div className='card'>
                <h4>Tomorrow</h4>
                <img className='img-card' src='weather-app-master\weather-app-master\Shower.png' alt='weather' />
                <div className='temp-card'>
                    <div>
                    <h4>16°C</h4>
                    <h4>22°C</h4>
                    </div>
                </div>
            </div>
        </div>
        <section className='information'>
            <h2>Today's Hightlights</h2>
            <div className='first-info'>
                <div className='wind'>
                    <h4>Wind status</h4>
                    <div className='wind-info'>
                        <h2>7</h2>
                        <p>mph</p>
                    </div>
                    <div className='wind-arrow'>
                        <img></img>
                        <p>wsw</p>
                    </div>
                </div>
                <div className='humidity'>
                    <h4>Humidity</h4>
                    <div className='humidity-info'>
                        <h2>84</h2>
                        <p>%</p>
                    </div>
                    <div>
                        <img></img>
                    </div>
                </div>
            </div>
            <div className='sec-info'>
                <div className='visibility'>
                    <h4>Visibility</h4>
                    <div className='miles'>
                        <h2>6,4</h2>
                        <p>miles</p>
                    </div>
                </div>
                <div className='air'>
                    <h4>Air Pressure</h4>
                    <div className='pressure'>
                        <h2>998</h2>
                        <p>mb</p>
                    </div>
                </div>
            </div>
        </section>
        <div className='userName'>
            <p>created by GuiBarr - Funval alumn</p>
        </div>
      </content>
    </main>
  )
}

export default Window
