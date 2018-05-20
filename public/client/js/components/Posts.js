import React, {Component} from 'react'

import {Link} from 'react-router-dom'
import { connect } from "react-redux"

class Posts extends Component {
	render(){
	  return (
			<div className="post-container">
				{
					this.props.posts.map((post, i) =>
						<Link key={i} to={`/archive/${post.slug}`} className="post">
							<div className="post-img" style={{backgroundImage: `url(${post.featured_image_src})`}}/>
							<h3 className="post-title">{post.title.rendered}</h3>
						</Link>
					)
				}
			</div>
    )
  }
}

const mapStateToProps = posts => {
  return posts
}

export default connect(mapStateToProps)(Posts)
