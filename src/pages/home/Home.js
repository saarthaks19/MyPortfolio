import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Buttonn from '../../components/button/Buttonn'
import ButtonnB from '../../components/button/ButtonnB'

const Home = () => {
  return (
    <div className='home'>
      <div className='hnavbar'>
      <div className='text'>Satyam Goyal</div>
      <Navbar/>
      </div>
      <div className='main'>
        <div className='image'></div>
        <div className='fields'>
          <div className='text'>
          <h1>Hello I'm</h1>
          <h2>Satyam Goyal</h2>
          <h3>Programmer | Developer</h3>
          </div>
          <div className='buttongrp'>
          <Buttonn link = "https://drive.google.com/file/d/1tqbzRpc2nMu2Gd4kpe7wp2VFSpngFauj/view?usp=sharing" text = 'View CV'/>
          <a href="#contact"><ButtonnB text = 'Contact Info'/></a>

          </div>
          <div className='socials'>
            <a href='https://www.linkedin.com/in/satyam-goyal-825a67225/' target='_blank'><div className='ld'></div></a>
            <a href='https://github.com/SatyamGoyal42' target='_blank'><div className='gh'></div></a>
          </div>
        </div>

      </div>

      

    </div>
  )
}

export default Home
