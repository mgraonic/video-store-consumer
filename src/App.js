import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieLibrary from './components/MovieLibrary';
import CustomerList from './components/CustomerList';
import Search from './components/Search';
import axios from 'axios';

import './App.css';

const BASE_URL = "http://localhost:3300/rentals/"

class App extends Component {

  constructor() {
    super();

    this.state = {
      title: "nothing",
      customer_name: "test name",
      customer_id: 0,
    }
  }

  createRental = () => {
    let RENTAL_URL = BASE_URL + `${this.state.title}` + '/check-out'
    console.log(RENTAL_URL);

    let date = new Date();
    date.setDate(date.getDate() + 7);

    let params = {title: this.state.title, customer_id: this.state.customer_id, due_date:  date};

    axios.post(RENTAL_URL, params)
    .then((response)=>{
      console.log(`succeeded with response: ${response.data}`);
    })
    .catch((error)=>{
      console.log(`failed with errors: ${error}`);
    });
  }

  // function that changes state
  updateMovie = (banana) => {
    let updatedState = this.state;
    updatedState["title"] = banana.title;
    this.setState(updatedState);
  }

  updateCustomer = (cust_name, cust_id) => {
    let updatedState = this.state;
    updatedState["customer_name"] = cust_name;
    updatedState["customer_id"] = cust_id;
    this.setState(updatedState);
  }

  render() {

    return (

      <Router>
        <body className="App">
          <header className="App-header">
            <h1 className="App-title">VIDEO STORE |</h1>

            <div className="selected-state">
              <p>selected movie: {this.state.title} </p>
              <p>selected customer name: {this.state.customer_name}</p>
            </div>
            <button onClick={this.createRental}>Check out movie</button>

            <div className="links">
              <Link to="/movies">Movies</Link>
              <Link to="/customers">Customers</Link>
              <Link to="/search">Search</Link>
            </div>
          </header>

          <main>
            <Route path="/movies"
              render = {() => {
                return (<MovieLibrary callBack={this.updateMovie}/>)
              }} />

              <Route path="/customers"
                render = {() => {
                  return (<CustomerList callBack={this.updateCustomer}/>)
                }} />

              <Route path="/search" component={Search} />
              </main>
        </body>
      </Router>
        );
      }
    }

    export default App;
