import React from 'react'
import Navbar from '../components/Navbar'

const Portfolio = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='homeContent'>
        <div className='content'>
      <h4>Mon souhait étant de devenir, à terme, analyste en cybersécurité, mon portfolio suit deux axes; <br></br><br></br>
-L'un en rapport avec le développement, le DevOps et le cloud, ou je présente mes projets orientés développement,<br></br><br></br>
-L'autre  en rapport avec l'ingénierie systèmes & réseaux et la sécurité informatique à proprement parler, ou je présente des projets qui ont moins d'allure que le développement,  en mais qui documentent mon apprentissage, ma compréhension et ma technicité dans le monde de l'ingénierie systèmes & réseaux.</h4>
<br></br><br></br><br></br><br></br><br></br>
      <div className='pdf'>
        <a href="https://github.com/AntonBangoura" target='_blank'>Mon GitHub</a>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio