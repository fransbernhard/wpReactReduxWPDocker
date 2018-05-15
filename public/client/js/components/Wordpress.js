import React, { Component } from 'react'
import Post from './Post.js'
import Pages from './Pages.js'

class Wordpress extends Component {

  render(){
    return (
      <div className="bg">
        <div className="home-wrapper">
          <h1>Wordpress Posts</h1>
          <Post />
          <h1>Wordpress Pages</h1>
          <Pages />
        </div>
      </div>
    )
  }
}

export default Wordpress
