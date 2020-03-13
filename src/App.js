import React from 'react';
import logo from './image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo-circle" alt="White cross, with a blue bacground spining" />
        <p>Hello, and welcome to the begining of the Swiss Plus Website. <strong>We hope you enjoy your stay</strong></p>
      </header>
    </div>
  );
}

export default App;
