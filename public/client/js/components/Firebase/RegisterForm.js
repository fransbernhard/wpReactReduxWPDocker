import React, {Component} from 'react';
import fb from './Database'

// REDUX
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { registerUser } from "../../redux/actions/index"

class RegisterForm extends Component {
	constructor(props){
    super(props);

		this.state = {
      email: '',
			username: '',
      password: ''
    }

		this.handleChangeEmail = this.handleChangeEmail.bind(this)
		this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePwd = this.handleChangePwd.bind(this)
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this)
  }

	handleChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }

  handleChangePwd(e) {
    this.setState({
      password: e.target.value
    })
  }

	handleChangeUsername(e) {
		this.setState({
			username: e.target.value
		})
	}

	handleSubmitRegister(e) {
		e.preventDefault()
		this.props.registerUser(this.state.username, this.state.email, this.state.password)
	}

	render(){
	  return (
			<div>
				<p className="wText" id="wText">{this.props.errorText ? this.props.errorText : ""}</p>
				{ this.props.fbStatus
					? null
					: <div className="form registerForm" id="registerBox">
							<form id="form">
								<input type="text" onChange={this.handleChangeUsername} placeholder="Username" name="uname" />
								<input type="text" onChange={this.handleChangeEmail} placeholder="Email" name="email" />
								<input type="password" onChange={this.handleChangePwd} placeholder="Password" name="psw" />
								<button id="registerBtn" className="fbBtn registerBtn" onClick={this.handleSubmitRegister}>Register</button>
							</form>
						</div>
					}
			</div>
    )
  }
}

const mapStateToProps = state => {
  return {
		fbStatus: state.fbStatus,
    errorText: state.errorText
	}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ registerUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
