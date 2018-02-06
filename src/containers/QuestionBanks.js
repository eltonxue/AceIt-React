import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { verifyToken } from '../actions';

import { QuestionBanksHeader, QuestionBanksList } from '../containers';

class QuestionBanks extends Component {
  constructor(props) {
    super(props);
    this.props.verifyToken();
  }
  render() {
    return (
      <div className="question-banks-container">
        <QuestionBanksHeader />
        <QuestionBanksList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ verifyToken }, dispatch);
}

export default connect(null, mapDispatchToProps)(QuestionBanks);
