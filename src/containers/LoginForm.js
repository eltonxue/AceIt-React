import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateLogin } from '../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log('Form is sent');
    // console.log(this.state.username);
    // console.log(this.state.password);

    // Do authentication checks

    // this.props.history.push('/');

    this.props.validateLogin(this.state.username, this.state.password);
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
        console.log(response.type);
        console.log(response.error);
      } else {
        this.props.history.push(response.redirect);
      }
    }
  }

  render() {
    return (
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
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={event => this.setState({ password: event.target.value })}
          />
        </div>
        <button className="btn btn-1" onClick={this.onFormSubmit}>
          Login
        </button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ validateLogin }, dispatch);
}

function mapStateToProps({ authentication }) {
  return { authentication };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
