import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieLibrary from './components/MovieLibrary';
import CustomerList from './components/CustomerList';
import Search from './components/Search';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      movie: {
        title: "nothing"
      },
      customer: {
        id: 213874614894,
        name: "fake name"
      }
    }
  }

  // function that changes state
  updateMovie = () => {

  }

  updateCustomer = () => {
    
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Our Broke Ass App</h1>
        </header>
        <Router>
        <div>
          <ul>
            <li>
              <div>
                <p>selected movie: {this.state.movie.title} </p>
                <p>selected customer: {this.state.customer.name}</p>
              </div>
            </li>

            <li>
              <Link to="/movies">Movies</Link>
            </li>

            <li>
              <Link to="/customers">Customers</Link>
            </li>

            <li>
              <Link to="/search">Search</Link>
            </li>

          </ul>
          <Route path="/movies"
            render = {() => {
              return (<MovieLibrary />)
            }} />

          <Route path="/customers"
            render = {() => {
              return (<CustomerList />)
            }} />

          <Route path="/search" component={Search} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
