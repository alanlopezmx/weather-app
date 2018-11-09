import React, { Component } from 'react';
import './App.css';
import {Grid,Row,Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';

const cities = [
    "Buenos aires,ar",
    "Washington,us",
    "Bogota,col",
    "Ciudad de México,mx",
    "Madrid,es",
    "Lima,pe"
];
class App extends Component {
  handleSelectedLocation = city => {

    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    return (
      <div className="App">
        <LocationList 
            cities={cities}
            onSelectedLocation={this.handleSelectedLocation}/>
      </div>
    );
  }
}

export default App;
