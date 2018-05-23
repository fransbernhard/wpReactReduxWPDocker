import React, { Component } from 'react'

import { connect } from "react-redux";

class Single extends Component {
  render() {
    let URL = this.props.location.pathname.split('/')
    let URL_SLUG = URL.pop() || URL.pop()
    console.log(URL_SLUG);

    let posts = this.props.posts
    let thisPost = {}

    posts.map(post => {
      if(post.slug == URL_SLUG){
        thisPost = post
      }
    })

    return (
      <div className="container">
        <div className="single-wrapper">
          <h1>{thisPost.title.rendered}</h1>
          <img src={thisPost.featured_image_src} className="single-img"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = posts => {
  return posts
}

export default connect(mapStateToProps, null)(Single);
