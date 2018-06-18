import React, { Component } from 'react';

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
