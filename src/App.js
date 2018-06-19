import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieLibrary from './components/MovieLibrary';
import CustomerList from './components/CustomerList';
import Search from './components/Search';
import './App.css';


class App extends Component {
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
              <Link to="/movies">Movies</Link>
            </li>

            <li>
              <Link to="/customers">Customers</Link>
            </li>

            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <RentalInfo  />
            </li>

          </ul>
          <Route path="/movies" component={MovieLibrary} />
          <Route path="/customers" component={CustomerList} />
          <Route path="/search" component={Search} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
