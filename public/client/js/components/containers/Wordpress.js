import React, { Component } from 'react'
import Posts from '../Posts.js'
import Pages from '../Pages.js'

import { connect } from "react-redux";
import { fetchAll } from "../../redux/actions/index"
import { bindActionCreators } from "redux"

class Wordpress extends Component {
  componentDidMount(){
    const APP_URL = 'http://0.0.0.0:80'
    const POST_URL = `${APP_URL}/wp-json/wp/v2/posts?per_page=30`
    const PAGES_URL = `${APP_URL}/wp-json/wp/v2/pages`

    this.props.fetchAll(POST_URL)
    this.props.fetchAll(PAGES_URL)
  }

  render(){
    return (
      <div className="bg">
        <div className="home-wrapper">
          <h2>Wordpress Posts</h2>
          <Posts/>
          <h2>Wordpress Pages</h2>
          <Pages />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchAll}, dispatch)
}

export default connect(null, mapDispatchToProps)(Wordpress);
