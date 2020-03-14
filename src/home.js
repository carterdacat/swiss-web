import React, {useState} from 'react';
import './home.css';
import logo from "./image.png"
function Homepg() {

  const [speed, setSpeed] = useState(15);

  function faster () {
    setSpeed(speed === 1 ? speed : speed-2)
  };

  function slower() {
    setSpeed(speed+2);
  }

  const animationStyle = {
    animation: `App-logo-spin infinite ${speed}s linear`
  }

  return (
    <div className="App">
      <header className="App-header">
      <img key={speed} src={logo} style={animationStyle} className="App-logo-circle" id='spinnerLogo' alt="Spinning logo"/>         
      <p>Hello, and welcome to the begining of the Swiss Plus Website. <strong>We hope you enjoy your stay</strong></p>
        <button className='App-button' id='fastLogoButton' onClick={faster}>Increase Spin Speed!</button>
        <button className='App-button' id='slowLogoButton' onClick={slower}>Decrease Spin Speed!</button>
      </header>
    </div>
  );
}

export default Homepg;