import styled from 'styled-components';
import React from 'react';

const ListContainer = styled.ul`
    width: 80vw;
    display: flex;
    justify-content: space-evenly;
    overflow-x: auto;

    ::-webkit-scrollbar {
        width: 20px;
        }
        
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(248,249,250,0.2); 
        border-radius: 10px;
        }
        
    ::-webkit-scrollbar-thumb {
        background:rgba(248,249,250,0.4); 
        border-radius: 10px;
        }
        
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(248,249,250,0.2); 
`
const ListItem = styled.li`
    display: flex;
    min-width: 15vh;
    flex-direction: column;
    align-items: center;
    background-color: rgba(248,249,250,0.4);
    margin: 10px;
    border-radius: 5px;
    font-family: inherit;
`

const Temp = styled.h3`
    margin-top: 15px;
    margin-bottom: 5px;
`

const Time = styled.span`
    font-family: inherit;
    font-size: 1.2rem;
    margin-bottom: 15px;
`

const Icon = styled.img`
    max-width: 50px;
`

const ResultHourly = (props) => {

    const array = props.list.hourlyWeather.slice(0,15)

  return (
    <div>
        <ul>
            <h2>Forecast</h2>
            <ListContainer>
                {array.map(el => (
                    <ListItem key={el.dt}>
                        <Temp>{Math.round(el.main.temp)} °C</Temp>
                        <Icon src={`https://openweathermap.org/img/w/${el.weather[0].icon}.png`}></Icon>
                        <Time>{el.dt_txt.slice(10,13)}:00</Time>
                    </ListItem>))} 
            </ListContainer>

        </ul>
    </div>
  )
}

export default ResultHourly;