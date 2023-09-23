import React from 'react'

function Modal() {
  return (
    <div>
      <menu>
        <div>
            <button>X</button>  
        </div>
        <nav>
            <input type='text' placeholder='search location'></input>
            <button>Search</button>
        </nav>
        <div>
            <button>London</button>
            <button>Barcelona</button>
            <button>Long Beach</button>
        </div>
      </menu>
    </div>
  )
}

export default Modal
