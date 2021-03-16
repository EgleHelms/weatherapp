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
font-size: 1.5rem;
text-transform: capitalize;
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
      <div  style={{width: "100%",display: "flex"}}>
          <div style={{width: "100%", display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
              <div>
                <h1 style={{fontSize: "2.5rem", marginBottom:"0"}}>{props.weather.city}, {props.weather.country}</h1>
                <h3 style={{marginTop:"0"}}>{props.weather.date}</h3>
                <div>
                  <IconStyle>{iconChoice()}</IconStyle>
                  <CurrTempStyle>{props.weather.temp}°C</CurrTempStyle>
                  <CurrDescStyle>{props.weather.description}</CurrDescStyle>
                </div>
              </div>
              <ResultDetails weather={props.weather}/>
          </div>
      </div>
      <div>
          <ResultHourly list={props.weather} />
        </div>
</div>
  );
}

export default Result;
