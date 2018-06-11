import Slider from './Slider.js'
import React, { Component } from 'react'

import { connect } from "react-redux"

class About extends Component {

  render(){
    let pages = this.props.pages
    let aboutPage = {}

    pages.map(page => {
      const title = page.title.rendered.toLowerCase()
      if(title == "about"){
        aboutPage = page
      }
    })

    return (
      <div>
        <div className="bg" style={{backgroundImage: `url(${Object.keys(aboutPage).length != 0 ? aboutPage.acf.about_image : null})`}}>
          <div className="home-wrapper about-wrapper" >
            <div className="about-box">
              <h1>Welcome to {Object.keys(aboutPage).length != 0 ? aboutPage.title.rendered : null} Page</h1>
            </div>
            <div className="slider-section">
              <Slider gallery={Object.keys(aboutPage).length != 0 ? aboutPage.acf.gallery : null } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = pages => {
  return pages
}

export default connect(mapStateToProps, null)(About);
