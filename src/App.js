import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  // const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bbcee01db995d3aea21f15b3fa745616';

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Rome</p>
          </div>
          <div className="temp">
            <h1>20°C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>25°C</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>10 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
