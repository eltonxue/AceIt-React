import React, { Component } from 'react';
import { LoginForm } from '../containers';

class Login extends Component {
  render() {
    return (
      <div className="flex-center">
        <h1>Login</h1>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
