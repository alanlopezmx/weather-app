import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from '../../constants/weather';

const location = "Buenos Aires,ar";
const api_key = "5be96d5810de63a33a94ced791487a90";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m/s",
}

const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 20,
    wind: "10 m/s",
}

class WeatherLocation extends Component {
    constructor(){
        super();
        this.state = {
            city: "Buenos Aires",
            data: data,
        };
    }
    handleUpdateClick = () =>{
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then(data => {
            console.log(data);
            debugger;
        });

        console.log("Actualizado");
        this.setState({
            city: "Buenos Aires!",
            data: data2,
        });
    }
    render() {
        const {city,data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
            );
    }
}


export default WeatherLocation;