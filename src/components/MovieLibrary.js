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
      console.log(`%c Successfully loaded movies!`, 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
      this.props.updateStatusCallback(`Successfully loaded ${response.data.length} movies!`);
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
      extID={movie.external_id}
      callBack={this.props.callBack}
      />
    })
    return(
      <section className="movielibrary">
        {movies}
      </section>
    );
  }
}

MovieLibrary.propTypes = {
  callBack: PropTypes.func.isRequired,
  updateStatusCallback: PropTypes.func
};
export default MovieLibrary;
