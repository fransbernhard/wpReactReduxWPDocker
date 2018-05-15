import React, {Component} from 'react';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

class Post extends Component {
	render(){
	  return (
      <ul className="post-ul">
				{
					this.props.posts.map((post, i) =>
						<li key={i}>
								<img className="post-img" src={post.featured_image_src} />
						</li>
					)
				}
      </ul>
    )
  }
}

const mapStateToProps = posts => {
  return posts
}

export default connect(mapStateToProps)(Post);
