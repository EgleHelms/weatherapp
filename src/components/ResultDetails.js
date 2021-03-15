import styled from 'styled-components';
import React, { useState } from 'react';

const ResultDetails = (props) => {

  return (
    <div>
        <div>
            <span>Details:</span>
            <p>{props.weather.feel} °C</p>
            <p>{props.weather.preasure}</p>
            <p>{props.weather.wind} m/s</p>
            <p>{props.weather.sunrise}</p>
            <p>{props.weather.sunset}</p>
        </div>
    </div>
  );
}

export default ResultDetails;
