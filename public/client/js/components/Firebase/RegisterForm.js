import React, {Component} from 'react';
import fb, { auth, provider } from './Database'

class RegisterForm extends Component {
	constructor(props){
    super(props)

		this.state = {
      email: '',
			username: '',
      password: '',
			errorText: ''
    }

		this.handleChangeEmail = this.handleChangeEmail.bind(this)
		this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePwd = this.handleChangePwd.bind(this)
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this)
  }

	handleSubmitRegister(e) {
		e.preventDefault()
		const email = this.state.email
		const password = this.state.password
		const username = this.state.username

		fb.auth().createUserWithEmailAndPassword(email, password)
			.then(() => {
				user = fb.auth().currentUser
			})
			.then(() => {
				user.updateProfile({
					displayName: username
				}).then(() => {
					console.log("displayname update successful")
				}, function(e) {
					console.log("ERROR CHANGING DISPLAYNAME: " + e);
					this.setState({
						errorText: e
					})
				})
			}).catch( e => {
				this.setState({
					errorText: e.message
				})
			})
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

	render(){
	  return (
			<div>
				<p className="wText" id="wText">{this.props.errorText ? this.props.errorText : ""}</p>
				{ this.props.showRegister
					? <div className="form registerForm" id="registerBox">
							<form id="form">
								<input type="text" onChange={this.handleChangeUsername} placeholder="Username" name="uname" />
								<input type="text" onChange={this.handleChangeEmail} placeholder="Email" name="email" />
								<input type="password" onChange={this.handleChangePwd} placeholder="Password" name="psw" />
								<button id="registerBtn" className="fbBtn registerBtn" onClick={this.handleSubmitRegister}>Register</button>
							</form>
						</div>
						: null
					}
			</div>
    )
  }
}

export default RegisterForm
