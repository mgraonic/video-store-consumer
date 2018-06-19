import React, { Component } from 'react';


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

    this.props.externalDBQueryCallback(this.state.query);

    this.setState( {
      query: ""
    })
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
