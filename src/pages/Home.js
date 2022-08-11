import React from 'react'
import Navbar from '../components/Navbar';
import cvAnton from '../data/cvAnton.pdf'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='homeContent'>
        <div className='content'>
      <h1>Anton Bangoura</h1>
      <h2>IT Worker</h2>
      <h3>Ce CV est construit grâce à un REST API fait avec AWS:)</h3>
      <div className='pdf'>
        <a href={cvAnton} target='_blank'>Télécharger CV</a>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Home