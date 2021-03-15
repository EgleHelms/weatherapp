import styled, {createGlobalStyle} from 'styled-components';
import React, { useState } from 'react';
import Search from "./components/Search";
import Result from "./components/Result";
import BgImage from "./assets/2844240.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${BgImage});
    
  }
` 

const App = () => {

const [value, setValue] = useState("");
const [weatherInfo, setWeather] = useState(null);
const [error, setError] = useState(false);


const handleInput = (e) =>{
  setValue(e.target.value)
}

const handleSearch = (e) =>{
  e.preventDefault();
  const APIkey = "88d62c3b14b6a686e5197791fb46bac7";
  //process.env.REACT_APP_API_KEY;

  const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${APIkey}&units=metric`;
  //const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${APIkey}&units=metric`;

  async function weatherInfo(){
    const data = await fetch(weather)
    return data;
} 

const weatherData = weatherInfo()
.then(res => res.json())
.then(data => {

  const date = new Date().toLocaleDateString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("de-DE").slice(0, 5);
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("de-DE").slice(0, 5);

    const weatherObj = {
      city: data.name,
      country: data.sys.country,
      date,
      description: data.weather[0].description,
      main: data.weather[0].main,
      temp: Math.round(data.main.temp),
      feel: Math.round(data.main.feels_like),
      preassure: data.main.preasure,
      clouds: data.clouds.all,
      humidity: data.main.temp,
      wind: data.wind.speed,
      sunset,
      sunrise
    }
    console.log(data)
  setWeather(weatherObj);
})
}
  
  return (
    <div>
      <GlobalStyle/>
      <h1>Weather App</h1>
      <Search 
        value={value}
        showResult={weatherInfo}
        change={handleInput}
        submit={handleSearch}
      />
      {weatherInfo && <Result weather={weatherInfo}/>}
    </div>
  );
}

export default App;
