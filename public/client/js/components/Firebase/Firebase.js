import React, { Component } from 'react'
import fb, { auth, provider } from './Database'
import image from '../../../img/forrest.jpg';

import { connect } from 'react-redux'
import { fetchAllFbPosts } from "../../redux/actions/index"

import FbPost from './FbPost.js'
import LoginForm from './LoginForm.js'
import RegisterForm from './RegisterForm.js'

var bgStyle = {
  width: "100vw",
  minHeight: "90vh",
  backgroundImage: "url(" + image + ")"
}

class Firebase extends Component {
  constructor(props){
    super(props)

    this.state = {
      showLogin: false,
      showRegister: false,
      user: {}
    }

    this.props.fetchAllFbPosts()

    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)

    // var status = true
    // var user = fb.auth().currentUser
    // user ? status = true : status = false
    // console.log("USER: ");
    // console.log(user);
  }

  componentDidMount() {

    var user = fb.auth().currentUser
    console.log(user);

    // Object.keys(user).length === 0
    //   ? this.setState({ user: null })
    //   : this.setState({ user: user, showLogin: false, showRegister: false })

    // fb.auth().onAuthStateChanged( user => {
    //   console.log(user);
    //   user
    //     ? this.setState({ user: null })
    //     : this.setState({ user, showLogin: false, showRegister: false })
    // })
    //
    // console.log("JAJAJAJ");
    console.log(this.state.user);
  }

  handleLogout(e){
    e.preventDefault()
    fb.auth().signOut()
      .then(() => {
        console.log("LOGGED OUT")
      }).catch( err => {
        console.log("ERROR LOGGING OUT: " + err)
      })
  }

  handleLogin(e){
    e.preventDefault()
    this.setState({
      showLogin: this.state.showLogin ? false : true
    })
  }

  handleRegister(e){
    e.preventDefault()
    this.setState({
      showRegister: this.state.showRegister ? false : true
    })
  }

  render(){

    return (
      <div className="bg" style={bgStyle}>
        <div className="firebase-wrapper">
          <ul className="fb-menu">
            <h1 id="welcomeTitle" >Welcome {this.state.user ? this.state.user.email : "Stranger"}</h1>
            <div>
              {
                this.state.user
                ? <button className="logoutBtn btns" onClick={this.handleLogout}>Logout</button>
                : <div><button className="logintBtn btns" onClick={this.handleLogin}>Login</button>
                <button className="registerBtn btns" onClick={this.handleRegister}>Register</button></div>
              }
            </div>
          </ul>
          {
            this.state.user
            ? <FbPost />
            : <div><LoginForm showLogin={this.state.showLogin} /><RegisterForm showRegister={this.state.showRegister}/></div>
          }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllFbPosts: () => dispatch(fetchAllFbPosts())
})

export default connect(null, mapDispatchToProps)(Firebase);
