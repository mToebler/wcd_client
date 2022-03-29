import "./login.css"
import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPw: ""
    };
  }

  submitCredentials() {
    // const history = ();
    axios.put("http://localhost:3030/api/v1/login", { email: this.state.userEmail, password: this.state.userPw })
      .then((res) => {
        console.log('DEBUG res:', res);
        if(res.status == 200) {
          localStorage.setItem("token", JSON.stringify(res.data.token))
          console.log('submitCreds: json str:', JSON.stringify(res.data.token))
          window.location.replace("/");          
        } else {
          localStorage.clear()
        }
      // this.props.history.push("/home");      
      // window.location.reload();      
    }, error => {
      console.error('submitCredentials: Error:', error)
    })
    
  }

  userEmailChanged(event) {
    this.setState({userEmail: event.target.value})
  }

  userPwChanged(event) {
    this.setState({userPw: event.target.value})
  }
  render() {
    
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
              <span className="login100-form-title p-b-33">
                Account Login
              </span>
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="email" name="email" placeholder="Email" value={this.state.userEmail} onChange={this.userEmailChanged.bind(this)} required />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>
              <div className="wrap-input100 rs1 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password" value={this.state.userPw} onChange={this.userPwChanged.bind(this)} required />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>
              <div className="container-login100-form-btn m-t-20">
                <button onClick={this.submitCredentials.bind(this)} className="login100-form-btn">
                Sign in
                </button>
              </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default Login;