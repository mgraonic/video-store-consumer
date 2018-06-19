import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import axios from 'axios';
import Movie from './Movie';

const DB_URL = "http://localhost:3300/movies?query=";

class Search extends Component {
  constructor(){
    super();

    this.state = {
      dbMovies: []
    };
  }

  externalQuery = (query) => {
    axios.get(DB_URL+query)
      .then((response) => {
        console.log("success query");
        console.log(response.data);

        this.setState({
          dbMovies: response.data
        })
      })
      .catch((error) => {
        console.log("error query");
      });
  }

  render(){
    const dbMovies = this.state.dbMovies.map((movie, index)=>{
      return <Movie key={index}
        movieTitle={movie.title}
        overview={movie.overview}
        image={movie.image_url}
        buttonText="Add to Library"
        id={movie.external_id} />
    })

    return(
      <section>
        <SearchBar externalDBQueryCallback={this.externalQuery} />

        {dbMovies}
      </section>
    )
  }
}

export default Search;
