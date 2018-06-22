import React, { Component } from 'react';
import './Customer.css';
import PropTypes from 'prop-types';

class Customer extends Component {
  buttonClick = () => {
    let cust_name = this.props.customerName;
    let cust_id = this.props.id;
    this.props.callBack(cust_name, cust_id);
  }
  render(){
    return(
      <div className="customer">
        <h3 className="customer_content">{this.props.customerName}</h3>
        <button
          onClick={this.buttonClick}
          type="submit">Add to Rental
        </button>
      </div>
    );
  }
}

Customer.propTypes = {
  customerName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  callBack: PropTypes.func.isRequired

};

export default Customer;
