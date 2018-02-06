import React, { Component } from 'react';

import { QuestionBank } from '../containers';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuestionBanks } from '../actions';

class QuestionBanksList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchQuestionBanks();
  }

  render() {
    const questionBanks = this.props.questionBanks.data.map(bank => (
      <QuestionBank
        key={bank.id}
        id={bank.id}
        title={bank.title}
        questions={bank.questions}
        lastUpdated={bank.updatedAt}
      />
    ));
    return <div className="question-bank-questions-container">{questionBanks}</div>;
  }
}

function mapStateToProps({ questionBanks }) {
  return { questionBanks };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuestionBanks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionBanksList);
