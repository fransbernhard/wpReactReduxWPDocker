import React, { Component } from 'react';
import { connect } from "react-redux";

class InstagramPost extends Component {
  render() {
    return (
      <div>
        <h2>INSTAGRAM</h2>
        <ul className="instagram-ul">
          { this.props.insta && this.props.insta.length ?
            this.props.insta.map((post, i) =>
              <li key={i}>
                <a target="_blank" href={post.link}><img src={post.images.thumbnail.url} /></a>
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
