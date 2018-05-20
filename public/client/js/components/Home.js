import React, { Component } from 'react'
import video from '../../img/Sunset-Siesta.mp4';

import { connect } from "react-redux";
import { fetchAll } from "../redux/actions/index"
import { bindActionCreators } from "redux"

class Home extends Component {
  componentDidMount(){
    const APP_URL = 'http://0.0.0.0:80'
    const PAGES_URL = `${APP_URL}/wp-json/wp/v2/pages`

    this.props.fetchAll(PAGES_URL)
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
