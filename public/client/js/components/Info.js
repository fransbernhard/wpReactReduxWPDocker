import React, { Component } from 'react';
import InstagramPost from './InstagramPost';
import GitHubPost from './GitHubPost';

class Info extends Component {
  render() {
    return (
      <div className="bg">
        <div className="home-wrapper">
          <InstagramPost />
          <GitHubPost />
        </div>
      </div>
    )
  }
}

export default Info
