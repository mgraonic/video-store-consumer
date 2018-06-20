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
      title: "nothing",
      customer_id: 0,
    }
  }

  // function that changes state
  updateMovie = (banana) => {
    let updatedState = {};
    updatedState["title"] = banana.title;
    this.setState(updatedState);
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
                  <p>selected movie: {this.state.title} </p>
                  <p>selected customer id: {this.state.customer_id}</p>
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
                return (<MovieLibrary callBack={this.updateMovie}/>)
              }} />

              <Route path="/customers"
                render = {() => {
                  return (<CustomerList callBack={this.updateCustomer}/>)
                }} />

                <Route path="/search" component={Search} />
              </div>
            </Router>
          </div>
        );
      }
    }

    export default App;
