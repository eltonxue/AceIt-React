import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateRegistration, validateLogin } from '../actions';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    // Do authentication checks

    if (this.state.username && this.state.email && this.state.password && this.state.confirmPassword) {
      this.props.validateRegistration(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.confirmPassword
      );
    } else {
      this.setState({ error: 'Empty fields' });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.handleAuthentication(nextProps.authentication);
  }

  handleAuthentication(authentication) {
    if (authentication.action) {
      const response = authentication.action.payload;
      console.log(response);
      if (response.error) {
        // Handle errors
        this.setState({ error: response.error });
        console.log(response.type);
        console.log(response.error);
      } else {
        // Successful registration
        const { username, password } = response;
        if (response.redirect) {
          this.props.history.push(response.redirect);
        } else {
          this.props.validateLogin(username, password);
        }
      }
    }
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
          <div>
            <h2 className="error">{this.state.error}</h2>
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
  return bindActionCreators({ validateRegistration, validateLogin }, dispatch);
}

function mapStateToProps({ authentication }) {
  return { authentication };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegistrationForm));
