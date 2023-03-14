import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bbcee01db995d3aea21f15b3fa745616`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input 
          value={location}
          onChange={event => setLocation(event.target.value)}
          placeholder='Enter Location'
          onKeyPress={searchLocation}
          type="text"
        />
      </div>
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
            <p className="desc">Feels like</p>
          </div>
          <div className="humidity">
            <p>20%</p>
            <p className="desc">Humidity</p>
          </div>
          <div className="wind">
            <p>10 MPH</p>
            <p className="desc">Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
