import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import Movie from './Movie';
import './MovieLibrary.css';
import PropTypes from 'prop-types';

const DB_URL = "http://localhost:3300/movies?query=";
const API_URL = "http://localhost:3300/movies";

class Search extends Component {
  constructor(){
    super();

    this.state = {
      dbMovies: []
    };
  }

  addToLibrary = (movie) => {
    // grab movie from state (that exists becuse of search)
    // create movie object
    // pass to axios with POST URL + movie object we just made
    console.log(movie);

    axios.post(API_URL, movie)
      .then((response)=>{
        console.log(API_URL);
        console.log(`%c Successfully performed a search!`, 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
        this.props.updateStatusCallback(`Successfully added ${movie.title} to your Movie Library!`)
      })
      .catch((error)=>{
        console.log(`there was an error: ${error.message}`);
        this.props.updateStatusCallback(`Failed to add movie: ${error.message}`)
      });
  }

  clickHandler = () => {
    this.props.clearStatusCallback();
  }

  externalQuery = (query) => {
    axios.get(DB_URL+query)
      .then((response) => {
        this.setState({
          dbMovies: response.data
        })
        console.log(response.data);
        this.props.updateStatusCallback(`Found ${response.data.length} movie titles related to your search!`);
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
          this.props.updateStatusCallback(`Failed to load movies: ${error.message}`);
      });
  }

  render(){
    const dbMovies = this.state.dbMovies.map((movie, index)=>{
      return <Movie key={index}
        movieTitle={movie.title}
        overview={movie.overview}
        releaseDate={movie.release_date}
        image={movie.image_url}
        buttonText="Add to Library"
        extID={movie.external_id}
        index={index}
        callBack={this.addToLibrary} />
    })

    return(
      <section>
        <SearchBar
          onClick={this.clickHandler} externalDBQueryCallback={this.externalQuery} />
        <section className="movielibrary">
          {dbMovies}
        </section>
      </section>
    )
  }
}

Search.propTypes = {
  updateStatusCallback: PropTypes.func
};

export default Search;
