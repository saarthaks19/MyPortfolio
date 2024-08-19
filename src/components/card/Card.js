import React from 'react';
import './Card.css';
import Buttonn from '../../components/button/Buttonn'
const Card = (props) => {
  return (
    <div className='Card'>
      <div className='InsideCard'>
        <div className='photo'
          style={{
            height: '20vw',
            width: '20vw',
            borderRadius: '1vw',
            backgroundImage: `url(${props.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: '0% 0%',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <p>{props.name}</p>
        <div className='Buttons'>
          <Buttonn link = {props.gh} text = "Github" />
          {props.n === 2 ? <Buttonn link = {props.ld}text="Live demo" /> : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
