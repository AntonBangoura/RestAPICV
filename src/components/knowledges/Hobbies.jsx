import React from 'react'

function Hobbies() {
  return (
    
      <div className="hobbies">
        <h3>Intérêts</h3>
        <ul>
          <li className='hobby'>
        <i className='fas fa-chess'></i>
        <span>Échecs - 1700 ELO</span>
          </li>
          <li className='hobby'>
        <i className='fas fa-running'></i>
        <span>Boxe anglaise</span>
          </li>
          <li className='hobby'>
        <i className='fas fa-hiking'></i>
        <span>Littérature classique</span>
          </li>
          <li className='hobby'>
          <i class="fab fa-spotify"></i>       <span>Musique classique</span>
          </li>
        </ul>
      </div>
    
  )
}

export default Hobbies