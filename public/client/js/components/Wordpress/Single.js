import React, { Component } from 'react'

import { connect } from "react-redux";
import { fetchPostBySlug } from "../../redux/actions/index"

class Single extends Component {
  constructor(props){
    super(props)

    const APP_URL = 'http://0.0.0.0:80'
    const POST_URL = `${APP_URL}//wp-json/wp/v2/posts?slug=${this.props.match.params.query}`

    this.props.fetchPostBySlug(POST_URL)
  }

  render() {
    const post = this.props.post

    return (
      <div className="container">
        <div className="single-wrapper">
          <h1>{Object.keys(post).length != 0 ? post[0].title.rendered : null }</h1>
          <img src={Object.keys(post).length != 0 ? post[0].featured_image_src : null} className="single-img"/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPostBySlug: POST_URL => dispatch(fetchPostBySlug(POST_URL))
})

const mapStateToProps = post => {
  return post
}

export default connect(mapStateToProps, mapDispatchToProps)(Single)

// let URL = this.props.location.pathname.split('/')
// let URL_SLUG = URL.pop() || URL.pop()
// console.log(URL_SLUG);
//
// let posts = this.props.posts
// let thisPost = {}
//
// posts.map(post => {
//   if(post.slug == URL_SLUG){
//     thisPost = post
//   }
// })
