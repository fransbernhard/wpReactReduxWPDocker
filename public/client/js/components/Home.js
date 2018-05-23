import React, { Component } from 'react'
import video from '../../img/Sunset-Siesta.mp4'
import circle from '../../img/circle.png'

import { connect } from "react-redux";
import { fetchAll } from "../redux/actions/index"
import { bindActionCreators } from "redux"

class Home extends Component {
  componentWillMount(){
    const APP_URL = 'http://0.0.0.0:80'
    const PAGES_URL = `${APP_URL}/wp-json/wp/v2/pages`

    this.props.fetchAll(PAGES_URL)
  }

  render(){
    let pages = this.props.pages
    let homePage = {}

    pages.map(page => {
      const title = page.title.rendered.toLowerCase()
      if(title == "home"){
        homePage = page
      }
    })

    return (
      <div className="bg">
        <div className="home-wrapper">
          <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4"/>
          </video>
          <img className="circle" src={circle} alt="lsd circle" height="150" width="150"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = pages => {
  return pages
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchAll}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
