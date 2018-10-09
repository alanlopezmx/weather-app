import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () =>(
    <div>
        <WeatherLocation city="Buenos Aires,ar"/>
        <WeatherLocation city="Bogota,col"/>
        <WeatherLocation city="Aguascalientes,mx"/>
        <WeatherLocation city="Barcelona,es"/>
    </div>
);

export default LocationList;