import React from 'react';
import {NavLink} from 'react-router-dom';
import antonPhoto from '../data/antonPhoto.jpg'

const Navbar = () => {
  return (
    <div className='sidebar'>

      <div className='id'>
        <div className='idContent'>
        <img src={antonPhoto} alt="PhotoAnton"/>
<h3>Anton Bangoura</h3>
        </div>
      </div>
      
      <div className='navigation'>
        <ul>
          <li>
          <NavLink exact to="/" activeClassName="navActive">
            <i className='fas fa-home'></i>
            <span>Accueil</span>
          </NavLink>
          </li>
          <li>
          <NavLink exact to="/competences" activeClassName="navActive">
            <i className='fas fa-mountain'></i>
            <span>Compétences</span>
          </NavLink>
          </li>
          <li>
          <NavLink exact to="/portfolio" activeClassName="navActive">
            <i className='fas fa-images'></i>
            <span>Portfolio</span>
          </NavLink>
          </li>
          <li>
          <NavLink exact to="/contact" activeClassName="navActive">
            <i className='fas fa-address-book'></i>
            <span>Contact</span>
          </NavLink>
          </li>
          
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/anton-bangoura-68a2151a2/?originalSubdomain=ua' target='_blank' rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
          </li>
          <li>
            <a href='https://github.com/AntonBangoura' target='_blank' rel="noopener noreferrer"><i className='fab fa-github'></i></a>
          </li>
          <li>
            <a href='https://www.instagram.com/exevropa/?hl=fr' target='_blank' rel="noopener noreferrer"><i className='fab fa-instagram'></i></a>
          </li>
         
        </ul>
        <div className="signature">
  <p>Anton Bangoura © - 2022</p>
</div>
      </div>



    </div>
  )
}

export default Navbar