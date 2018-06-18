import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

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
      console.log(response.data);
      this.setState({movies: response.data});
    })
    .catch((error)=>{
      console.log("there was an error");
    });
  };

  render() {

    const movies = this.state.movies.map((movie,index)=>{
      return <Movie key={index}
      movieTitle={movie.title}
      overview={movie.overview}
      id={movie.id} />
    })
    return(
      <ul>
      {movies}
      </ul>
    );
  }
}
export default MovieLibrary;
