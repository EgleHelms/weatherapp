import styled from 'styled-components';
import React from 'react';

const DetailsContainer = styled.div`
min-width: 350px;
display: flex;
background-color: rgba(248,249,250,0.4);
border-radius: 5px;
margin: 10px;
justify-content: space-evenly;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  p {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 3px;
  }

  span {
    text-align: center;
  }
`

const ResultDetails = (props) => {

  return (
    <DetailsContainer>
          <FlexContainer>
              <p>{props.weather.feel}°C</p> <span>Feels like</span>
              <p>{props.weather.pressure} hPa</p> <span>Preassure</span>
              <p>{props.weather.sunrise}</p> <span>Sunrise</span>
          </FlexContainer>
          <FlexContainer>
              <p>{props.weather.humidity} % </p> <span>Humidity</span>
              <p>{props.weather.wind} m/s </p> <span>Wind speed</span>
              <p>{props.weather.sunset}</p> <span>Sunset</span>
          </FlexContainer>
    </DetailsContainer>
  );
}

export default ResultDetails;
