import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Movies from './components/Movies';
import logo from './logo.svg';
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

          </ul>
          <Route path="/movies" component={Movies} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
