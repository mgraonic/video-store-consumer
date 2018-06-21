import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './MovieLibrary.css';

const MOVIES_URL = "http://localhost:3300/movies";

class MovieLibrary extends Component {

  constructor(){
    super();

    this.state = {
      movies: []
    };
  }

  componentDidMount(){
    axios.get(MOVIES_URL)
    .then((response)=>{
      this.setState({movies: response.data});
    })
    .catch((error)=>{
      console.log(`There was an error: ${error}`);
    });
  }

  render() {

    const movies = this.state.movies.map((movie,index)=>{
      return <Movie
      key={index}
      index={index}
      movieTitle={movie.title}
      overview={movie.overview}
      image={movie.image_url}
      buttonText="Select for Rental"
      id={movie.id}
      extID={movie.external_id}
      callBack={this.props.callBack} />
    })
    console.log(this.state.movies.length);
    return(
      <section className="movielibrary">
        {movies}
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  callBack: PropTypes.func.isRequired
};
export default MovieLibrary;
