import React, { Component } from 'react';
import { RegistrationForm } from '../containers';

class Register extends Component {
  render() {
    return (
      <div className="flex-center">
        <h1>Register</h1>
        <RegistrationForm />
      </div>
    );
  }
}

export default Register;
