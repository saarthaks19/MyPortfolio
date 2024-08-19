import React from 'react'
import "./Single.css"

const Single = (props) => {
  return (
    <div className='single'>
        <div className='img'></div>
        <div className='title'>{props.title}</div>
    </div>
  )
}

export default Single
