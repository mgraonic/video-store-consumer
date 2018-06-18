import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Customer extends Component {
  render(){
    return(
      <li>
        {this.props.id}
        {this.props.customerName}
      </li>
    );
  }
}

export default Customer;
