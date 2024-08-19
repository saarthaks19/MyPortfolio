import React from 'react'
import './indField.css'
const Indf = (props) => {
  return (
    <div className='inf'>
    <div className='header'>
      <div className='institue'>{props.insti}</div>
      <div className='date'>{props.date}</div>
    </div>
    <div className='desc'>{props.desc}</div>
  </div>
  )
}

export default Indf
