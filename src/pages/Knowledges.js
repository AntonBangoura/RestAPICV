import React from 'react'
import Languages from '../components/knowledges/Languages'
import Navbar from '../components/Navbar'
import Experience from '../components/knowledges/Experience'
import OtherSkills from '../components/knowledges/OtherSkills'
import Hobbies from '../components/knowledges/Hobbies'

const Knowledges = () => {
  return (
    <div className='knowledges'>
      <Navbar/>
      <div className='knowledgesContent'>
      <Languages/>
      <Experience/>
      <OtherSkills/>
      <Hobbies/>

      </div>
    </div>
  )
}

export default Knowledges