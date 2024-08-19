import React from 'react'
import './Skills.css'
import Single from '../../components/singleSkill/Single'

const Skills = () => {
  return (
    <div className='skills'>
      <div className='text'>
        <h1>Explore My</h1>
        <h2>Skills</h2>
      </div>
      <div className='main'>
        <div className='card1'>
          <h1>Languages</h1>
          <Single title = "C++"/>
          <Single title = "C"/>
          <Single title = "Java"/>
          <Single title = "JavaScript"/>
          <Single title = "TypeScript"/>
          <Single title = "Python"/>

        </div>
        <div className='card2'>
          <h1>Web Technologies</h1>
          <Single title = "React.JS"/>
          <Single title = "Express.JS"/>
          <Single title = "HTML"/>
          <Single title = "CSS"/>
          <Single title = "MongoDB"/>
        </div>
        <div className='card3'>
          <h1>Developer Tools</h1>
          <Single title = "VS Code"/>
          <Single title = "Git"/>
          <Single title = "GitHub"/>
          <Single title = "Figma"/>
          
        </div>
      </div>
      
    </div>
  )
}

export default Skills
