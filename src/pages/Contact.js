import React from 'react'
import Navbar from '../components/Navbar'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Contact = () => {
  return (
    <div className='contact'>
      <Navbar/>
      <div className='contactContent'>
        <div className='header'></div>
        <div className='contactBox'>
        <h1>Contactez-moi!</h1>
        <ul>
          <li>
            <i className='fas fa-map-marker-alt'></i>
            <span>La Rochelle</span>
          </li>
          <li>
            <i className='fas fa-mobile-alt'></i>
            <CopyToClipboard text="0670041053">
              <span className='clickInput' onClick={() => {alert('Telephone copie!');}}>0670041053</span>
              </CopyToClipboard>
          </li>
          <li>
            <i className='far fa-envelope'></i>
            <CopyToClipboard text="bangouranton@gmail.com">
              <span className='clickInput' onClick={() => {alert('Email copie!');}}>bangouranton@gmail.com</span>
              </CopyToClipboard>
          </li>
        </ul>
      </div>
      </div>
      
    </div>
  )
}

export default Contact