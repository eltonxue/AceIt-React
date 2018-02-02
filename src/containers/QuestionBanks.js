import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { verifyToken, fetchQuestionBanks } from '../actions';

class QuestionBanks extends Component {
  constructor(props) {
    super(props);
    const token = document.cookie;
    console.log(`Token: ${token}`);
    this.props.verifyToken();
    this.props.fetchQuestionBanks();
  }
  render() {
    return (
      <div>
        <h1>HELLO THIS IS QUESTION BANKS PAGE</h1>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ verifyToken, fetchQuestionBanks }, dispatch);
}

export default connect(null, mapDispatchToProps)(QuestionBanks);
