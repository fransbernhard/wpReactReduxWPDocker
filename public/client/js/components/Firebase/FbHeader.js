import React, { Component } from 'react'
import fb from './Database'

// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { loginUserSuccess, loginStatus } from "../../redux/actions/index"

class FbHeader extends Component {
  constructor(props){
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
  }

  handleLogout(e){
    e.preventDefault()
    fb.auth().signOut()
      .then(() => {
        console.log("LOGGED OUT");
        this.props.loginUserSuccess({})
        this.props.loginStatus(false)
      }).catch( err => {
        console.log("ERROR LOGGING OUT: " + err);
      })
  }

  handleLogin(e){
    e.preventDefault()
  }

  handleRegister(e){
    e.preventDefault()
  }

  render(){
    return(
      <ul className="fb-menu">
        <h1 id="welcomeTitle" >Welcome {this.props.fbStatus ? this.props.user.displayName : "Stranger"}</h1>
        <div>
          <button className="logoutBtn btns" onClick={this.handleLogout}>Logout</button>
          <button className="logintBtn btns" onClick={this.handleLogin}>Login</button>
          <button className="registerBtn btns" onClick={this.handleRegister}>Register</button>
        </div>
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
		fbStatus: state.fbStatus,
    user: state.user
	}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loginUserSuccess, loginStatus }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FbHeader);
