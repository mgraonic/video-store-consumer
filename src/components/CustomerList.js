import React, { Component } from 'react';
import Customer from './Customer';
import axios from 'axios';
import './CustomerList.css'
import PropTypes from 'prop-types';

const CUST_URL = "http://localhost:3300/customers";

class CustomerList extends Component {
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
      this.props.updateStatusCallback(`Successfully loaded ${response.data.length} customers!`);
    })
    .catch((error)=>{
      console.log(`There was an error: ${error}`);
    });
  }

  render(){
// map response to customer list
const customers = this.state.customers.map((customer, index)=>{
  return <Customer
    key={index}
    customerName={customer.name}
    id={customer.id}
    callBack={this.props.callBack}/>
});

    return(
      <section className="customer-list">
          { customers }
      </section>
    );
  }
}

CustomerList.propTypes = {
  callBack: PropTypes.func.isRequired,
  updateStatusCallback: PropTypes.func
};

export default CustomerList;
