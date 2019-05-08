import React from 'react';
import Draggable from 'react-draggable';

import Info from './Components/UI/Info.js'
import Bandcamp from './Components/UI/Bandcamp.js'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className="App">
    <Draggable className="card1">
        <div className="card1">
          <Info />
        </div>
    </Draggable>

    <Draggable className="card1">
        <div className="card1">
          <Bandcamp />
        </div>
    </Draggable>

  </div>

   
  );
}

export default App;
