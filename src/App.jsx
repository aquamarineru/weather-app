import React, {useState} from "react"
import axios from "axios"

function App() {
  //const url = `http://api.openweathermap.org/geo/1.0/direct?q=dallas,{state code},{country code}&limit={limit}&appid={API key}`
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Moscow</p>
          </div>
          <div className="temp">
            <h1>-10°C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className='bold'>5°C</p>
          </div>
          <div className="humidity">
            <p className='bold'>20%</p>
          </div>
          <div className="wind">
            <p className='bold'>5km/h</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
