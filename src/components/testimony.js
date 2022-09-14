import React, { Component } from 'react'
import '../css/testimony.css';

class Testimony extends Component {;
  
  render() {
    return (
      <div className='container-testimony'>
        <img className='image-testimony' src={require(`../images/testimony-${this.props.image}.png`)}
        alt={`${this.props.name}`} />
        <div className='container-text-testimony'>
          <p className='testimony-name'><strong>{this.props.name}</strong> en {this.props.country}</p>
          <p className='testimony-charge'>{this.props.role} en <strong>{this.props.company}</strong></p>
          <p className='testimony-text'>{this.props.testimony}</p>
        </div>
      </div>
    );
  }
}

export default Testimony;
