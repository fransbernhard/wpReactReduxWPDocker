import React, { Component } from 'react'
import InstagramPost from '../InstagramPost'
import GitHubPost from '../GitHubPost'

import { connect } from "react-redux"
import { fetchAll } from "../../redux/actions/index"
import { bindActionCreators } from "redux"

class Info extends Component {
  componentDidMount(){
    const token = 'ACCESS_TOKEN'
    const userId = '173775459'
    const INSTA_URL = 'https://api.instagram.com/v1/users/' + userId + '/media/recent/?access_token=' + token

    this.props.fetchAll('https://api.github.com/users/fransbernhard/repos')
    this.props.fetchAll(INSTA_URL)
  }

  render() {
    return (
      <div className="bg">
        <div className="info-wrapper">
          <InstagramPost />
          <GitHubPost />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchAll}, dispatch)
}

export default connect(null, mapDispatchToProps)(Info);
