import React from 'react';
import '../css/testimony.css';

function Testimony(props) {
  return (
    <div className='container-testimony'>
      <img className='image-testimony' src={require(`../images/testimony-${props.image}.png`)}
      alt='Testimony Foto' />
      <div className='container-text-testimony'>
        <p className='testimony-name'><strong>{props.name}</strong> en {props.country}</p>
        <p className='testimony-charge'>{props.role} en <strong>{props.company}</strong></p>
        <p className='testimony-text'>{props.testimony}</p>
      </div>
    </div>
  );
}

export default Testimony;