import React, { Component } from 'react'
import video from '../../img/Sunset-Siesta.mp4';

import { connect } from 'react-redux'
import { fetchAll } from "../redux/actions/index"
import { bindActionCreators } from "redux"

class Home extends Component {
  componentDidMount(){
    const APP_URL = 'http://0.0.0.0:80'
    const POST_URL = `${APP_URL}/wp-json/wp/v2/posts?per_page=30`
    const PAGES_URL = `${APP_URL}/wp-json/wp/v2/pages`

    const token = 'ACCECSS_TOKEN'
    const userId = '173775459'
    const INSTA_URL = 'https://api.instagram.com/v1/users/' + userId + '/media/recent/?access_token=' + token

    this.props.fetchAll(INSTA_URL)
    this.props.fetchAll('https://api.github.com/users/fransbernhard/repos')
    this.props.fetchAll(POST_URL)
    this.props.fetchAll(PAGES_URL)
    this.props.fetchAll(PAGES_URL, 'about')
  }

  render(){
    return (
      <div className="bg">
        <div className="home-wrapper">
          <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4"/>
          </video>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchAll}, dispatch)
}

export default connect(null, mapDispatchToProps)(Home);
