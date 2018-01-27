import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/index.css';

class Navigation extends Component {
  render() {
    return (
      <div>
        <ul role="nav">
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/register">Register</StyledLink>
          </li>
          <li>
            <StyledLink to="/login">Login</StyledLink>
          </li>
          <li>
            <StyledLink to="/question-banks">Question Banks</StyledLink>
          </li>
          <li>
            <StyledLink to="/history">History</StyledLink>
          </li>
          <li>
            <StyledLink to="/search">Search</StyledLink>
          </li>
          <li>
            <StyledLink to="/practice">Practice</StyledLink>
          </li>
          <li>
            <StyledLink to="/my-account">My Account</StyledLink>
          </li>
          <li>
            <StyledLink to="/logout">Logout</StyledLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

const StyledLink = styled(Link)`
  font-size: 20px;
  color: white;
  text-decoration: none;
`;

export default Navigation;
