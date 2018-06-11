import React, { Component } from 'react'
import video from '../../img/Sunset-Siesta.mp4'
import circle from '../../img/circle.png'
// import { connect } from "react-redux";

class Home extends Component {

  componentDidMount(){
    console.log("HOME DID MOUNT");
  }

  render(){
    return (
      <div className="bg">
        <div className="home-wrapper">
          <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4"/>
          </video>
          <img className="circle" src={circle} alt="lsd circle" height="150" width="150"/>
        </div>
      </div>
    )
  }
}

export default Home

// const mapStateToProps = pages => {
//   return pages
// }
//
// export default connect(mapStateToProps, null)(Home);

// let pages = this.props.pages
// let homePage = {}
//
// console.log("HOME COMPONENT");
//
// pages.map(page => {
//   const title = page.title.rendered.toLowerCase()
//   if(title == "home"){
//     homePage = page
//   }
// })
