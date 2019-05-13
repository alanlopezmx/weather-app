import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


import  { setCity } from './actions';

import './App.css';
import {Grid,Row,Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

const cities = [
    "Buenos aires,ar",
    "Washington,us",
    "Bogota,col",
    "Ciudad de México,mx",
    "Madrid,es",
    "Lima,pe"
];




class App extends Component {
  constructor(){
    super();
    this.state = {
      city: null,
    }
  }
  handleSelectedLocation = city => {
    this.setState({
      city,
    });


    this.props.setCity(city);

    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
          <Paper elevation={4}>

            <div className="details">
            {city ? 
            <ForecastExtended city={city}/> : 
            <h1>No se seleccionó ciudad</h1>
            
           }
            </div>
          </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setCity(value))
});


export default connect(null,mapDispatchToPropsActions)(App);
