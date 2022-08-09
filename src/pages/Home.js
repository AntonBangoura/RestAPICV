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
      <h2>Futur analyste cyber</h2>
      <div className='pdf'>
        <a href={cvAnton} target='_blank'>Telecharger CV</a>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Home