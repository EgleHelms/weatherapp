import styled, {createGlobalStyle} from 'styled-components';
import React, { useState } from 'react';
import Search from "./components/Search";
import Result from "./components/Result";
import BgImage from "./assets/2844240.jpg";

const GlobalStyle = createGlobalStyle`

  body {
    background-image: url(${BgImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    margin: 0;
    padding: 0;
  }

  #root {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
` 

const AppContainer = styled.div`
  margin-top: 100px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

const Head = styled.h1`
  margin: 50px;

  @media (max-width: 400px) {
    margin: 0 0 20px 0;
  }
`

const TodaysResContainer = styled.div`
  margin-top: 20px;
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
  const { REACT_APP_WEATHER_KEY} = process.env
  const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${REACT_APP_WEATHER_KEY}&units=metric`;
  const hourlyForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${REACT_APP_WEATHER_KEY}&units=metric`;

  async function weatherInfo(){
    const data1 = await fetch(weather);
    const data2 =await fetch(hourlyForecast);
    return [data1, data2];
} 

//Parallel fetch requests   https://dmitripavlutin.com/javascript-fetch-async-await/

weatherInfo()
.then(([res1, res2]) => {
  if (res1.ok && res2.ok) {
    return Promise.all([res1.json(), res2.json()]);
  } else {
    setError(true);
    throw Error(res1.statusText, res2.statusText)
  }
})

.then(([data1, data2]) => {
  let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  function formatDate() {
    const getDate = new Date().toLocaleDateString();
    const getWeekday = new Date().getDay();
    let arrayDate = getDate.split("/");
    let weekday = weekdays[getWeekday];
    let day = arrayDate[1];
    let month = months[arrayDate[0]-1];
    return `${weekday} ${day} ${month}`
  }

  const date = formatDate();
  const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString("de-DE").slice(0, 5); 
  const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString("de-DE").slice(0, 5);

    const weatherObj = {
      city: data1.name,
      country: data1.sys.country,
      date,
      description: data1.weather[0].description,
      main: data1.weather[0].main,
      temp: Math.round(data1.main.temp),
      feel: Math.round(data1.main.feels_like),
      pressure: data1.main.pressure,
      clouds: data1.clouds.all,
      humidity: data1.main.humidity,
      wind: data1.wind.speed,
      sunset,
      sunrise,
      hourlyWeather: data2.list
    }
  setWeather(weatherObj);
  setValue("");
  setError(false);
})
  .catch(error => {
  console.log(error);
})
}

if (error === true){
  return (
    <AppContainer>
      <GlobalStyle/>
      <h1>Weather App</h1>
      <Search 
        value={value}
        showResult={weatherInfo}
        change={handleInput}
        submit={handleSearch}
      />
      <h2>Sorry, could not find city you entered.</h2>
    </AppContainer>
  )

} else{
    return (
    <AppContainer>
      <GlobalStyle/>
      <Head>Weather App</Head>
      <Search 
        value={value}
        showResult={weatherInfo}
        change={handleInput}
        submit={handleSearch}
      />
      <TodaysResContainer>{weatherInfo && <Result weather={weatherInfo}/>}</TodaysResContainer>
    </AppContainer>
  );
}
}

export default App;
