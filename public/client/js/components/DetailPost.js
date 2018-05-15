import React, {Component} from 'react';
import { connect } from "react-redux";

class Post extends Component {
	render(){
	  return (
      <ul className="post-ul">
				{
					this.props.posts.map((post, i) =>
						<li key={i}>
							<a href={post.}>
								<img className="post-img" src={post.featured_image_src} />
							</a>
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
