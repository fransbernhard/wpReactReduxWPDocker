import React, { Component } from 'react'
import Posts from './Posts.js'
import Pages from './Pages.js'
import Flowers from './Flowers.js'

import { connect } from "react-redux";
import { fetchAll, fetchAllFlowers } from "../../redux/actions/index"

class Wordpress extends Component {
  componentDidMount(){
    this.props.fetchAllFlowers()
  }

  render(){
    return (
      <div className="bg">
        <div className="home-wrapper">
          <h2>Wordpress Posts</h2>
          <Posts/>
          <h2>Wordpress Pages</h2>
          <Pages />
          <h2>Flower Posts</h2>
          <Flowers />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllFlowers: () => dispatch(fetchAllFlowers())
})

export default connect(null, mapDispatchToProps)(Wordpress);
