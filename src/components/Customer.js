import React, { Component } from 'react';

class Customer extends Component {
  buttonClick = () => {
    let cust_name = this.props.customerName;
    let cust_id = this.props.id;
    this.props.callBack(cust_name, cust_id);
  }
  render(){
    return(
      <li>
        {this.props.id}
        {this.props.customerName}
        <button
          onClick={this.buttonClick}
          type="submit">Add to Rental
        </button>
      </li>
    );
  }
}

export default Customer;
