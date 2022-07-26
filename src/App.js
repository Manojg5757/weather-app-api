
import { useState } from 'react';
import './App.css';

function App() {
   const apiKey = '0afb2563248e75239ffa0ca6425a8bbf'
   const [weatherData, setWeatherData] = useState ([{}])
   const [city, setCity] = useState("")
  

  const getWeather = (event) => {
    if(event.key == "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
        }
      )
    }
  }
      
  return (
    <div className="App">
    <div className='form'>
     <input 
     className='search' 
     placeholder='Enter city Name'
     onChange={e => setCity(e.target.value)}
     value={city}
     onKeyPress={getWeather}
     type="text" />
     </div>

     {typeof weatherData.main === 'undefined' ?(
     <div className='greet'>
      <p>Welcome to Weather Data Center</p>
     </div>
     ) : (
     <div className='details'>
      <h1 className='name'>{weatherData.name}</h1>
      <h2 className='temp'>{Math.round(weatherData.main.temp)} Deg Celcious</h2>
      <h3 className='main'>{weatherData.weather[0].main}</h3>
     </div>
     )}
    </div>
  )
}

export default App;
