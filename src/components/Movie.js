import React, { Component } from 'react';
import PropTypes from 'prop-types';
 import './Movie.css';

class Movie extends Component {
// this is a change
  buttonClick = () => {
    let movie = {
      title: this.props.movieTitle,
      overview: this.props.overview,
      release_date: this.props.releaseDate,
      image_url: this.props.image,
      external_id: this.props.extID,
      inventory: 10
    }

    this.props.callBack(movie);
  }
  render(){

    return(
      <div className="movie">
        <img className="movie__content" src={this.props.image} alt={`${this.props.movieTitle}'s thumbnail`} />
        <h3 className="movie__content">{this.props.movieTitle}</h3>
        <button
          onClick={this.buttonClick} type="submit">{this.props.buttonText}
        </button>
      </div>

    )
  }
}

Movie.propTypes = {
  movieTitle: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  image: PropTypes.string,
  extID: PropTypes.string,
  inventory: PropTypes.number,
  buttonText: PropTypes.string,
  callBack: PropTypes.func.isRequired
};

export default Movie;
