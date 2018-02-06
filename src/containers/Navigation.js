import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions';
import styled from 'styled-components';
import '../styles/index.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="navigation-container">
          <IconLink to="/">AceIt</IconLink>
          <StyledLink to="/question-banks">Question Banks</StyledLink>
          <StyledLink to="/history">History</StyledLink>
          <StyledLink to="/search">Search</StyledLink>
          <StyledLink to="/practice">Practice</StyledLink>
          <StyledLink to="/my-account">My Account</StyledLink>
          <StyledLink to="/" onClick={() => this.props.logout()}>
            Logout
          </StyledLink>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div className="navigation-container">
          <IconLink to="/">AceIt</IconLink>
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
          {this.props.children}
        </div>
      );
    }
  }
}

const IconLink = styled(Link)`
  font-size: 30px;
  color: skyblue;
  text-decoration: none;
  margin: 0px 30px;

  transition-property: color;
  transition-duration: 0.1s;
  transition-timing-function: linear;

  &:hover {
    color: lightblue;
  }
`;

const StyledLink = styled(Link)`
  font-size: 25px;
  margin: 20px 5px;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  background-color: #1f1f1f;
  padding: 10px;

  transition-property: background-color;
  transition-duration: 0.1s;
  transition-timing-function: linear;

  &:hover {
    background-color: turquoise;
  }
`;

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

function mapStateToProps({ authentication }) {
  return { authentication };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
