import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bbcee01db995d3aea21f15b3fa745616&units=metric`;

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
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p>{data.main.feels_like.toFixed()}°C</p> : null}
              <p className="desc">Feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p>{data.main.humidity}%</p> : null}
              <p className="desc">Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
              <p className="desc">Wind Speed</p>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default App;
