import styled from 'styled-components';
import React from 'react';
import ResultDetails from "./ResultDetails";
import ResultHourly from "./ResultHourly"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloud, faBolt, faCloudRain, faCloudShowersHeavy, faSnowflake, faSun, faSmog} from '@fortawesome/free-solid-svg-icons';

const IconStyle = styled.span`
font-size: 4rem;
color: black;
`
const CurrTempStyle = styled.span`
font-size: 3rem;
margin-left: 20px;
` 
const CurrDescStyle = styled.p`
font-size: 2rem;
text-transform: capitalize;
` 
const CityWeather = styled.div`
@media (min-width: 600px) {
  margin-right: 30px;
}
` 
const Container1 = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 800px) {
    flex-wrap: wrap;
  }
`

const Container2 = styled.div`
  width: 80%;
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 800px) {
    flex-wrap: wrap;
  }
`

const Result = (props) => {

  const main = props.weather.main;

const iconChoice = () =>{
  if (main === 'Thunderstorm') {
    return <FontAwesomeIcon icon={faBolt} />;
  } else if (main === 'Drizzle') {
    return <FontAwesomeIcon icon={faCloudRain} />;
  } else if (main === 'Rain') {
    return <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (main === 'Snow') {
    return <FontAwesomeIcon icon={faSnowflake} />;
  } else if (main === 'Clear') {
    return <FontAwesomeIcon icon={faSun} />;
  } else if (main === 'Clouds') {
    return <FontAwesomeIcon icon={faCloud} />;
  } else {
    return <FontAwesomeIcon icon={faSmog} />;
  }
}

  return (
<div>
      <Container1>
          <Container2>
              <CityWeather>
                <h1 style={{fontSize: "2.5rem", marginBottom:"0"}}>{props.weather.city}, {props.weather.country}</h1>
                <h3 style={{marginTop:"0"}}>{props.weather.date}</h3>
                <div>
                  <IconStyle>{iconChoice()}</IconStyle>
                  <CurrTempStyle>{props.weather.temp}°C</CurrTempStyle>
                  <CurrDescStyle>{props.weather.description}</CurrDescStyle>
                </div>
              </CityWeather>
              <ResultDetails weather={props.weather}/>
          </Container2>
      </Container1>
              <div>
          <ResultHourly list={props.weather} />
        </div>
</div>
  );
}

export default Result;
