import React from 'react';
import Draggable from 'react-draggable';

import Info from './Components/UI/Info.js'
import Bandcamp from './Components/UI/Bandcamp.js'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className="App">
    <Draggable>
        <div>
          <Info />
        </div>
    </Draggable>

    <Draggable>
        <div>
          <Bandcamp />
        </div>
    </Draggable>

  </div>

   
  );
}

export default App;
