import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieLibrary from './components/MovieLibrary';
import CustomerList from './components/CustomerList';
import Search from './components/Search';
import axios from 'axios';
import Status from './components/Status';

import './App.css';

const BASE_URL = "http://localhost:3300/rentals/"

class App extends Component {

  constructor() {
    super();

    this.state = {
      title: "",
      customer_name: "",
      customer_id: 0,
      status: {
        message: 'Successfully loaded the page'
      }
    }
  }

  updateStatus = (message) => {
  this.setState({
    status: {
      message: message
    }
  })
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
      this.updateStatus(`Successfully rented ${this.state.title} to ${this.state.customer_name}`)
    })
    .catch((error)=>{
      console.log(`failed with errors: ${error}`);
    });
  }

  // function that changes state
  updateMovie = (movie) => {
    let updatedState = this.state;
    updatedState["title"] = movie.title;
    this.setState(updatedState);
    this.updateStatus(`Successfully added ${this.state.title} to your rental!`);
  }

  updateCustomer = (cust_name, cust_id) => {
    let updatedState = this.state;
    updatedState["customer_name"] = cust_name;
    updatedState["customer_id"] = cust_id;
    this.setState(updatedState);
    this.updateStatus(`Successfully added ${this.state.customer_name} to your rental!`);
  }

  render() {

    return (

      <Router>
        <body className="App">
          <header className="App-header">
            <h1 className="App-title header-part">VIDEO STORE</h1>

            <div className="links header-part">
              <Link className="page-link" to="/movies">Movies</Link>
              <Link to="/customers" className="page-link">Customers</Link>
              <Link to="/search" className="page-link">Search</Link>
            </div>

            <div className="header-part selected-items">
              <p>Selected Movie: {this.state.title} </p>
              <p>Selected Customer: {this.state.customer_name}</p>
            </div>

            <button onClick={this.createRental}>Check out movie</button>
          </header>

          <Status
          message={this.state.status.message}
          type={this.state.status.type}
        />

          <main>
            <Route path="/movies"
              render = {() => {
                return (<MovieLibrary
                  callBack={this.updateMovie}
                  updateStatusCallback={this.updateStatus}/>)
              }} />

              <Route path="/customers"
                render = {() => {
                  return (<CustomerList
                    callBack={this.updateCustomer}
                    updateStatusCallback={this.updateStatus}/>)
                }}
                />

              <Route path="/search"
                render = { () => {
                  return (
                    <Search
                      updateStatusCallback={this.updateStatus}/>)
              }}
              />
              </main>
          <footer>Maja & Angela &copy; 2018</footer>
        </body>
      </Router>
        );
      }
    }

    export default App;
