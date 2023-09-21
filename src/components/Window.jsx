import React from 'react'

function Window() {
  return (
    <main>
      <menu>
        <nav>
            <input type='text' placeholder='Search for places'></input>
            <button>location</button>
        </nav>
        <div>
            <image></image>
            <h1>15°</h1>
            <p>Shower</p>
        </div>
        <div>
            <h4>Today - Fri, 5 Jun</h4>
            <div>
                <image></image>
                <h4>Helsinki</h4>
            </div>
        </div>
      </menu>
      <content>
        <div>
            <button>°C</button>
            <button>°F</button>
        </div>
        <div>
            <div>
                <h4>Tomorrow</h4>
                <image></image>
                <div>
                    <h4>16°C</h4>
                    <h4>22°C</h4>
                </div>
            </div>
        </div>
        <section>
            <h2>Today's Hightlights</h2>
            <div>
                <div>
                    <h4>Wind status</h4>
                    <h2>7mph</h2>
                    <p>wsw</p>
                </div>
                <div>
                    <h4>Humidity</h4>
                    <h2>7mph</h2>
                    <p>wsw</p>
                </div>
            </div>
            <div>
                <div>
                    <h4>Visibility</h4>
                    <h2>6,4 miles</h2>
                </div>
                <div>
                    <h4>Air Pressure</h4>
                    <h2>998 mb</h2>
                </div>
            </div>
        </section>
      </content>
    </main>
  )
}

export default Window
