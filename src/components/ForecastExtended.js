import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import * as CONSTANTS from '../constants/api_url';
import transformForecast from '../services/transformForecast';
import './styles.css';


/*const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
}*/
class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null};
    }

    componentDidMount(){
        const url_forecast = `${CONSTANTS.url_base_weather_forecast}?q=${this.props.city}&appid=${CONSTANTS.api_key}`;

        fetch(url_forecast)
        .then( data =>(data.json())
        .then( weather_data => {
            console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            this.setState({ forecastData })
        })
        );
    }

    renderForecastItemDays(){
        return (<h1>Render items</h1>);
        //return days.map(day => <ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>)
    }
    renderProgress(){
        return (<h3>Cargando pronostico extendido</h3>);
    }


    render(){
        const {city} = this.props;
        const { forecastData } = this.state;
        return (
        <div>
            <h2 className='forecast-title'>Pronostico extendido para {city}</h2>
            {forecastData ? this.renderForecastItemDays() : this.renderProgress()}
        </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;