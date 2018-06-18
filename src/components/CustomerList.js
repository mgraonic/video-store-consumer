import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Customer from './Customer';
import axios from 'axios';

const CUST_URL = "http://localhost:3300/customers";

class Customers extends Component {
  constructor(){
    super();

    this.state = {
      customers: []
    };
  }

  componentDidMount(){
    axios.get(CUST_URL)
    .then((response)=>{
      this.setState({customers: response.data});
    })
    .catch((error)=>{
      console.log("there was an error");
    });
  };


  render(){
// map response to customer list
console.log("Logging customer list state");
console.log(this.state.customers);
const customers = this.state.customers.map((customer, index)=>{
  return <Customer key={index} customerName={customer.name} id={customer.id}/>
});

    return(
      <div>
        <h2>Hide your customers, hide your wife</h2>
        <ul>
          { customers }
        </ul>

      </div>
    );
  }
}


export default Customers;
