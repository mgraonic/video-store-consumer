import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

class RentalInfo extends Component {

  render(){
    console.log(this.state.movie);
    return(
    <div>
      <p>selected movie: {this.state.movie.title} </p>
      <p>selected customer: {this.state.customer.name}</p>
    </div>
    );
  }
}


export default RentalInfo;
