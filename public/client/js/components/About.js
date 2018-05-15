import Header from './common/Header.js'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchAll } from "../redux/actions/index"
import { bindActionCreators } from "redux"

class About extends Component {
  render(){
    return (
      <div>
        <Header/>
        <div className="bg" style={{backgroundImage: `url(${this.props.page[0].acf.about_image})`}}>
          <div className="home-wrapper">
            <h1>Welcome to about page</h1>
            <h2>This is ID: {this.props.page[0] ? this.props.page[0].id : null}</h2>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = page => {
  return page
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchAll}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
