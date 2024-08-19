import React from 'react'
import './button.css'
const Buttonn = (props) => {
  return (
    <a href={props.link} target="_blank">
      <div className='button'>
      {props.text}
      </div>
    </a>
  )
}

export default Buttonn
