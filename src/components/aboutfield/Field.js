import React from 'react'
import './Field.css'
import Indf from './Indf'
const Field = (props) => {
  return (
    <div className='super'>
        <div className='field1'>
        <div className='title'> Education</div>
      <Indf insti = "Delhi Technological University" date = "2021-2025" desc = "B.tech - Computer Engineering - CGPA 7.09"/>
      <Indf insti = "Jayshree Periwal High School" date = "2021" desc = "Class 12 - CBSE Boards - Percentage - 95.6%"/>
      <Indf insti = "St.Anselm’s North City School" date = "2019" desc = "Class 10 - CBSE Boards - Percentage - 95.4%"/>

    </div>
    
    <div className='field2'>
        <div className='title'> Experience</div>
        <Indf insti = "Web Developer Intern | JDB Infotech." date = "July 2024 - Present" desc = ""/>
        <Indf insti = "SDE Intern | EXL Services" date = "Dec 2023 - Mar 2024" desc = ""/>
    </div>

    </div>
  )
}

export default Field
