import React from 'react'
import './About.css'
import Field from '../../components/aboutfield/Field'
const About = () => {
  return (
    <div className='about'>
        <h1>Get to Know More</h1>
        <h2> About Me</h2>
        <p>I am pursuing my Undergrad in Computer Sciences while maintaining an ambitious mindset and an impluse to seek discomfort.

While I love working with software, when not at work, you can find me in the great outdoors. 

Right now I am looking for an internship opportunity at a mission-driven company where I can share my expertise and learn more. </p>
        <div className='main'>
          <div className='image'></div>
          <div className='fields'>
            <div className='grp'>
              <Field/>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default About
