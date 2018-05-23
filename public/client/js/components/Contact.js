import React, { Component } from 'react'

import { connect } from 'react-redux'

class Contact extends Component {
  render(){
    let pages = this.props.pages
    let contactPage = {}
    let acf = {}

    pages.map(page => {
      const title = page.title.rendered.toLowerCase()
      if(title == "contact"){
        contactPage = page
        acf = contactPage.acf
        console.log(acf);
      } else {
        console.log("NOT PAGE");
      }
    })

    return (
      <div>
        <div className="bg">
          <div className="home-wrapper" >
            <div className="about-box">
              <h1>Welcome to {contactPage.title.rendered} Page</h1>
              <p>
                {acf.first_name} {acf.last_name} <br/>
                {acf.email} <br/>
                {acf.phone} <br/>
                {acf.adress}, {acf.zip_code} <br/>
                {acf.city}, {acf.country}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = pages => {
  return pages
}

export default connect(mapStateToProps)(Contact);
