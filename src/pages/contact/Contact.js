import React from 'react'
import './Contact.css'
import Navbar from '../../components/navbar/Navbar'
const Contact = () => {
  return (

    <div className='wra'> 
      <div className='ContactBox'>
        <h1> Get in touch</h1>
        <h2> Contact Me </h2>
        <div className='ContactButton'>

          <a href="mailto:satyam1goyal1@gmail.com">
          <div className='email'>
            <div className='circle1'></div>
            <p>satyam1goyal1@gmail.com</p>
          </div>
          </a>
          <a href='https://www.linkedin.com/in/satyam-goyal-825a67225/' target='_blank'>
          <div className='email'>
            <div className='circle2'></div>
            <p>LinkedIn</p>
          </div>
          </a>
        </div>
       </div>
       <Navbar/>
    </div>
   
  )
}

export default Contact
