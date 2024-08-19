import React from 'react'
import Card from '../../components/card/Card'
import './Projects.css'
import img1 from '../../assests/CFM.png'
import img2 from '../../assests/ProjectMail.png'
import img3 from '../../assests/image.png'
const Projects = () => {
  return (
    <div className='wrapper'>

      <div className='texts'>
      <h2>Browse my recent</h2>
      <h1>Projects</h1>
      </div>
      <div className='Cards'>
        <Card n = {2} name="Mail App" imageUrl={img2} gh="https://github.com/Rijult33/mern-mail-app" ld="https://mern-mail-ea4330up8-rijult33s-projects.vercel.app/login"></Card>
        <Card n = {1}name="Cash Flow Minimizer" imageUrl={img1} gh = "https://github.com/SatyamGoyal42/Cash-flow-minimizer"></Card>
        <Card n = {2}name="My Portfolio" imageUrl={img3} gh="https://github.com/SatyamGoyal42/Portfolio" ld="https://portfolio-nine-ochre-41.vercel.app/#about"></Card>

      </div>
        
    </div>
  )
}

export default Projects
