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
      console.log(`%c Successfully loaded customers!`, 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
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
