import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {

  constructor(){
    super();

    this.state = {
      query: ""
    };
  }

  render() {

    return(
      <form>
      <label htmlFor="query">Search
      </label>
      <input
        type='text'
        name="query"
        value={this.state.query}/>
        <button
        type="submit">Go</button>
      </form>
    );
  }
}

export default SearchBar;
