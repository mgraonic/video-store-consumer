import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Movies extends Component {
  render(){
    return(
      <div>
        <img src={this.props.image} alt={`${this.props.movieTitle}\'s thumbnail`} />
        <h3>{this.props.movieTitle}</h3>
        <button type="submit">{this.props.buttonText}</button>
        <p>{this.props.overview}</p>

      </div>
    )
  }
}

export default Movies;
