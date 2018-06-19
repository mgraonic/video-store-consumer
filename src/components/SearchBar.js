import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {

  constructor(){
    super();

    this.state = {
      query: ""
    };
  }

  onInputChange = (event) => {
    this.setState({query: event.target.value})
    console.log(this.state);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

  }

  render() {

    return(
      <form onSubmit={this.onFormSubmit}>
      <label htmlFor="query">Search
      </label>
      <input
      type='text'
      name="query"
      value={this.state.query}
      onChange={this.onInputChange}/>
      <button
      type="submit">Go</button>
      </form>

    );
  }
}

export default SearchBar;
