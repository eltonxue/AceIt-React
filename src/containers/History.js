import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { verifyToken } from '../actions';

class History extends Component {
  constructor(props) {
    super(props);
    const token = document.cookie;
    console.log(`Token: ${token}`);
    this.props.verifyToken(token);
  }
  render() {
    return (
      <div>
        <h1>HELLO THIS IS HISTORY</h1>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ verifyToken }, dispatch);
}

export default connect(null, mapDispatchToProps)(History);
