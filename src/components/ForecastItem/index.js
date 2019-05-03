import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData';



const ForecastItem = ({ weekDay, hour, data }) => (
    <div>
        <div>{weekDay} Hora: {hour} hs</div>
        <WeatherData data={data}></WeatherData>
    </div>
);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,

};

export default ForecastItem;