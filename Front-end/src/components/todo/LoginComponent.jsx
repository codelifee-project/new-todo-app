import React, { Component } from 'react';
import AuthenticationService from '../../api/todo/AuthenticationService.js';

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'in28minutes',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  loginClicked() {
    if (
      this.state.username === 'in28minutes' &&
      this.state.password === 'dummy'
    ) {
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      this.props.history.push(`/welcome/${this.state.username}`);
      /* this.setState({
          showSuccessMessage: true,
          hasLoginFailed: false,
        }); */
    } else {
      console.log('Faild');
      this.setState({
        showSuccessMessage: false,
        hasLoginFailed: true,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className='container'></div>
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
        {/* {this.showInvalidCredentials()} */}
        {this.state.hasLoginFailed && (
          <div className='alert alert-warning'>Invalid Credentials</div>
        )}
        {this.state.showSuccessMessage && <div>Login Sucessfull</div>}
        {/* <ShowLoginSuccessful
            showSuccessMessage={this.state.showSuccessMessage}
          /> */}
        User Name:{''}
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:{''}
        <input
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button className='btn btn-success' onClick={this.loginClicked}>
          Login
        </button>
      </div>
    );
  }
}


export default LoginComponent;
