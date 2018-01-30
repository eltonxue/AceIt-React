import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateRegistration } from '../actions';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    // Do authentication checks

    this.props.validateRegistration(
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.confirmPassword
    );

    // this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <form className="authentication-box">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              onChange={event => this.setState({ username: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={event => this.setState({ password: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              onChange={event => this.setState({ confirmPassword: event.target.value })}
            />
          </div>
          <button className="btn btn-1" onClick={this.onFormSubmit}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ validateRegistration }, dispatch);
}

export default connect(null, mapDispatchToProps)(withRouter(RegistrationForm));
