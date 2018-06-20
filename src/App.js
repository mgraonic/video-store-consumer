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

  updateRentalState = (event) => {
    console.log(event.target);
    console.log("update rental state reached");
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
              return (<MovieLibrary rentalMovie= {updateRentalState} />)
            }} />

          <Route path="/customers"
            render = {() => {
                return (<CustomerList rentalCustomer= {updateRentalState} />)
            }} />

          <Route path="/search" component={Search} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
