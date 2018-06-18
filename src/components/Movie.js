import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Movies extends Component {
  render(){
    return(
      <li>{this.props.movieTitle}</li>
    )
  }
}

export default Movies;
