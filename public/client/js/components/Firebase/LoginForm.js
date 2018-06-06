import React, {Component} from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { loginUser } from "../../redux/actions/index"

class LoginForm extends Component {
	constructor(props){
    super(props)

		this.state = {
      email: '',
      password: ''
    }

		this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePwd = this.handleChangePwd.bind(this)

		this.handleSubmitLogin = this.handleSubmitLogin.bind(this)

  }

	handleSubmitLogin(e) {
		e.preventDefault()
		this.props.loginUser(this.state.email, this.state.password)
	}

	// CHANGE INPUT
	handleChangePwd(e) {
		this.setState({
			password: e.target.value
		})
	}

	handleChangeEmail(e) {
		this.setState({
			email: e.target.value
		})
	}
	
	render(){
	  return (
			<div>
				// <p className="wText" id="wText">{this.props.errorText ? this.props.errorText : ""}</p>
				<div className="form" id="loginBox">
					<p className="wText hide" id="wText"></p>
	        <form id="loginForm">
						<input type="text" onChange={this.handleChangeEmail} placeholder="Email" name="email" />
	          <input type="password" onChange={this.handleChangePwd} placeholder="Password" name="psw" />
						<button className="fbBtn loginBtn" id="loginBtn" onClick={this.handleSubmitLogin}>Login</button>
	        </form>
	      </div>
			</div>
    )
  }
}

const mapStateToProps = state => {
  return {
		fbStatus: state.fbStatus	
	}	
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loginUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
