import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Movies extends Component {
// this is a change
  buttonClick = () => {
    let movie = {
      title: this.props.movieTitle,
      overview: this.props.overview,
      release_date: this.props.releaseDate,
      image_url: this.props.image,
      inventory: 10
    }
    console.log(`movie button clicked ${movie}`);

    this.props.callBack(movie);
  }
  render(){

    return(
      <div>
        <img src={this.props.image} alt={`${this.props.movieTitle}\'s thumbnail`} />
        <h3>{this.props.movieTitle}</h3>
        <button onClick={this.buttonClick} type="submit">{this.props.buttonText}</button>
        <p>{this.props.overview}</p>

      </div>

    )
  }
}

export default Movies;
