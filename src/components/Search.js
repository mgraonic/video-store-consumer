import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SearchBar from './SearchBar';

class Search extends Component {
  render(){
    return(
      <SearchBar />
    )
  }
}

export default Search;
