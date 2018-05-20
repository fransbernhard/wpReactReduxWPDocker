import Header from './common/Header.js'
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
        <Header/>
        <div className="bg" style={{backgroundImage: `url(${aboutPage.acf.about_image})`}}>
          <div className="home-wrapper" >
            <h1>Welcome to about page</h1>
            <h2>This is ID: {aboutPage ? aboutPage.id : null}</h2>
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
