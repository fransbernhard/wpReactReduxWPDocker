import React, {Component} from 'react';

import { connect } from "react-redux";

class FbPost extends Component {
	render(){
	  return (
      <ul className="post-ul">
				{this.props.fbposts.map((post, i) =>
					<li key={i}>
						<p>{post.title}</p>
					</li>
				)}
      </ul>
    )
  }
}

const mapStateToProps = fbposts => {
  return fbposts
}

export default connect(mapStateToProps)(FbPost);
