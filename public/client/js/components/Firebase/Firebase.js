import React, { Component } from 'react'
import fb from './Database'
import image from '../../../img/forrest.jpg';

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { fetchAllFbPosts } from "../../redux/actions/index"

import FbPost from './FbPost.js'
import LoginForm from './LoginForm.js'
import RegisterForm from './RegisterForm.js'
import FbHeader from './FbHeader.js'

var bgStyle = {
  width: "100vw",
  minHeight: "90vh",
  backgroundImage: "url(" + image + ")"
}

class Firebase extends Component {
  constructor(props){
    super(props)

    // Check if user is logged in
    fb.auth().onAuthStateChanged( user => {
      user
      ? console.log("user is logged in")
      : console.log("user is logged out");
    })

    this.props.fetchAllFbPosts()
  }

  render(){

    return (
      <div className="bg" style={bgStyle}>
        <div className="home-wrapper firebase-wrapper">
          <FbHeader />
          <LoginForm />
          <RegisterForm />
          {
            this.props.fbStatus
            ? <FbPost />
            : null
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
		fbStatus: state.fbStatus
	}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchAllFbPosts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Firebase);
