import React, { Component } from 'react'
import Product from '../Wordpress/Product'

import { connect } from "react-redux";
import { fetchAllWcProducts } from "../../redux/actions/index"
import { bindActionCreators } from "redux"
// import WooCommerceAPI from 'woocommerce-api'
// var WooCommerceAPI = require('woocommerce-api');

class Products extends Component {
  componentDidMount(){
    const APP_URL = 'http://0.0.0.0:80'
    const CONSUMER_KEY = 'ck_fbeb26aaba6952e508a9b51717d7cd2c913a6d8c'
    const CONSUMER_SECRET = 'cs_c4b60568f964c73e9e2670204a96667963337ddf'
    // const CONSUMER_KEY = 'ck_xxxx'
    // const CONSUMER_SECRET = 'cs_xxxx'

    const PRODUCT_URL = `${APP_URL}/wp-json/wc/v2/products?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`

    this.props.fetchAllWcProducts(PRODUCT_URL)
  }

  render(){
    return (
      <div className="bg">
        <div className="home-wrapper">
          <h2>PRODUCTS</h2>
          <Product />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchAllWcProducts}, dispatch)
}

export default connect(null, mapDispatchToProps)(Products);
