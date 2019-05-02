import React from 'react';
import './App.css';
import Greet from './component/Greet.js';
import Welcome from './component/Welcome.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1>Hello World!</h1>
     <Greet/>
     <Welcome/>
      </header>
    </div>
  );
}

export default App;
