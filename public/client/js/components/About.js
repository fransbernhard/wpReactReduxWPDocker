import Slider from './Slider.js'
import React, { Component } from 'react'

import { connect } from 'react-redux'

class About extends Component {
  render(){
    let pages = this.props.pages
    let aboutPage = {}

    pages.map(page => {
      const title = page.title.rendered.toLowerCase()
      if(title == "about"){
        aboutPage = page
      } else {
        console.log("NOT PAGE");
      }
    })

    return (
      <div>
        <div className="bg" style={{backgroundImage: `url(${aboutPage.acf.about_image})`}}>
          <div className="home-wrapper about-wrapper" >
            <div className="about-box">
              <h1>Welcome to {aboutPage.title.rendered} Page</h1>
            </div>
            <div className="slider-section">
              <Slider gallery={aboutPage.acf.gallery} />
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

export default connect(mapStateToProps)(About);

// {
//   aboutPage.acf.gallery.map(item => {
//     console.log(item.sizes.large);
//   })
// }
