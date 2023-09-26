import React from 'react'
import './Modal.css'

function Modal({ onButtonClick }) {
  return (
    <div >
      <div className='bgd-modal'>
      <menu className='modal'>
        <div>
            <button onClick={onButtonClick}>X</button>  
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
    </div>
  )
}

export default Modal
