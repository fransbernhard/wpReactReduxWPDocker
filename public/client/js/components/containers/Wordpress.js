import React, { Component } from 'react'
import Posts from '../Posts.js'
import Pages from '../Pages.js'
import Flowers from '../Flowers.js'

import { connect } from "react-redux";
import { fetchAll, fetchAllFlowers } from "../../redux/actions/index"
import { bindActionCreators } from "redux"

class Wordpress extends Component {
  componentDidMount(){
    const APP_URL = 'http://0.0.0.0:80'
    const POST_URL = `${APP_URL}/wp-json/wp/v2/posts?per_page=30`
    const PAGES_URL = `${APP_URL}/wp-json/wp/v2/pages`
    const FLOWERS_URL = `${APP_URL}/wp-json/wp/v2/flower_product`

    this.props.fetchAll(POST_URL)
    this.props.fetchAll(PAGES_URL)
    this.props.fetchAllFlowers(FLOWERS_URL)
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

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({fetchAllFlowers, fetchAll}, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Wordpress);
