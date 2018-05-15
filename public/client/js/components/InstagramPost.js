import React, { Component } from 'react';
import { connect } from "react-redux";

class InstagramPost extends Component {
  render() {
    return (
      <div>
        <h1>INSTAGRAM</h1>
        <ul className="uls">
          { this.props.insta && this.props.insta.length ?
            this.props.insta.map((post, i) =>
              <li key={i}>
                <a href={post.link}><img src={post.images.thumbnail.url} /></a>
              </li>
            ) : null
          }
        </ul>

      </div>
    )
  }
}

const mapStateToProps = insta => {
  return insta
}

export default connect(mapStateToProps)(InstagramPost);
