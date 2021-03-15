import styled from 'styled-components';
import React, { useState } from 'react';
import ResultDetails from "./ResultDetails";

const Result = (props) => {

// const iconChoice = () =>{
//     if(props.weather.main === "Clouds"){
//         weatherIcon = <FontAwesomeIcon icon={faCloud} />;
//     }
// }

  return (
    <div>
        <div>
            <span> 
                {props.weather.city}, {props.weather.country}
            </span>
            <p>{props.weather.temp} °C</p>
            <p>{props.weather.description}</p>
            <ResultDetails weather={props.weather}/>
        </div>
    </div>
  );
}

export default Result;
