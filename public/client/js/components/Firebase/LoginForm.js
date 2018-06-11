import React, {Component} from 'react';
import fb, { auth, provider } from './Database'

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
		// const itemsRef = fb.database().ref('items');
		// const item = {
	  //   email: this.state.email,
	  //   password: this.state.password
	  // }
		// itemsRef.push(item)

		const email = this.state.email
		const password = this.state.password

		fb.auth().signInWithEmailAndPassword(email, password)
			.then( user => {
				console.log("LOGGED IN")
			}).catch(e => {
				console.log("ERROR LOGGIN: " + e.message);
			})
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
				{
					this.props.showLogin
					? <div className="form" id="loginBox">
						<p className="wText hide" id="wText"></p>
		        <form id="loginForm">
							<input type="text" onChange={this.handleChangeEmail} placeholder="Email" name="email" />
		          <input type="password" onChange={this.handleChangePwd} placeholder="Password" name="psw" />
							<button className="fbBtn loginBtn" id="loginBtn" onClick={this.handleSubmitLogin}>Login</button>
		        </form>
		      </div>
					: null
				}
			</div>
    )
  }
}

export default LoginForm
