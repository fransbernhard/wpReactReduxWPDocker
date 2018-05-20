import React, { Component } from 'react';
import { connect } from "react-redux";

class GitHubPost extends Component {
  render() {
    return (
      <div>
        <h2>GITHUB</h2>
        <ul className="git-uls">
          {this.props.git && this.props.git.length ?
            this.props.git.map((post, i) =>
              <li key={i}><a target="_blank" href={post.svn_url}>{post.name}</a></li>
            ) : null
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = git => {
  return git
}

export default connect(mapStateToProps)(GitHubPost);
