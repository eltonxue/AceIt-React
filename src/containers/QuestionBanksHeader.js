import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchQuestionBanks, searchQuestionBanks, addQuestionBank } from '../actions';

import { Button } from 'reactstrap';

class QuestionBanksHeader extends Component {
  constructor(props) {
    super(props);
  }

  onSearch = e => {
    const searchInput = e.target.value;
    if (searchInput) {
      this.props.searchQuestionBanks(searchInput);
    } else {
      this.props.fetchQuestionBanks();
    }
  };

  onAddQuestionBank = () => {
    this.props.addQuestionBank('New Bank', []);
  };

  render() {
    return (
      <div className="question-banks-header">
        <div className="question-bank-label">
          <h1>Question Banks</h1>
          <Button className="btn btn-2" onClick={() => this.onAddQuestionBank()}>
            Add
          </Button>
        </div>
        <input onKeyUp={this.onSearch} className="search-banks" placeholder="Search..." />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchQuestionBanks, searchQuestionBanks, addQuestionBank }, dispatch);
}

export default connect(null, mapDispatchToProps)(QuestionBanksHeader);
