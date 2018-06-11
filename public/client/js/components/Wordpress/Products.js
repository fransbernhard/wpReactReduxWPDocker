import React, { Component } from 'react'
import Product from '../Wordpress/Product'

import { connect } from "react-redux";
import { fetchAllWcProducts } from "../../redux/actions/index"

class Products extends Component {
  componentDidMount(){
    const APP_URL = 'http://0.0.0.0:80'
    const CONSUMER_KEY = 'ck_7eb8373e8a48cab2fc28e50855510eacebfff102'
    const CONSUMER_SECRET = 'cs_c20f10831ac6c85c7edf7a655aa7eeb78bf29eb5'
    // const CONSUMER_KEY = 'ck_xxxx'
    // const CONSUMER_SECRET = 'cs_xxxx'

    // const PRODUCT_URL = `${APP_URL}/wp-json/wc/v2/products?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`
    //
    // this.props.fetchAllWcProducts(PRODUCT_URL)

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

const mapDispatchToProps = dispatch => ({
  fetchAllWcProducts: () => dispatch(fetchAllWcProducts())
})

export default connect(null, mapDispatchToProps)(Products);
