import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class RentalInfo extends Component {
  render(){
    return(
    <div>
      <p>selected movie: </p>
      <p>selected customer: </p>
    </div>
    );
  }
}


export default RentalInfo;
