import React, { Component } from 'react';
import Testimony from './components/Testimony';
import { testimonies } from './data/testimonies';
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container-main'>
          <h1>Here is what our alumni say about freeCodeCamp:</h1>
          {
            testimonies.map(element => (
              <Testimony 
                name={element.name}
                country={element.country}
                image={element.image}
                role={element.role}
                company={element.company}
                testimony={element.testimony} />
                ))
          }
        </div>
      </div>
    );
  }
}

export default App;
