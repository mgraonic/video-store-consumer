import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchBar extends Component {

  constructor(){
    super();

    this.state = {
      query: ""
    };
  }

  onInputChange = (event) => {
    this.setState({query: event.target.value})
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

SearchBar.propTypes = {
  externalDBQueryCallback: PropTypes.func.isRequired

};

export default SearchBar;
