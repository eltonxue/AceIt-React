import React, { Component } from 'react';

import { Button } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addQuestion, removeQuestion, removeQuestionBank, updateTitle, fetchQuestionBanks } from '../actions';

class QuestionBank extends Component {
  constructor(props) {
    super(props);

    this.state = { input: '', editTitle: false };
  }

  componentWillReceiveProps = nextProps => {
    console.log(nextProps.questionBanks.update.questions);
  };

  onRemoveQuestionBank = bankId => {
    this.props.removeQuestionBank(bankId);
  };

  onRemoveQuestion = (bankId, question) => {
    this.props.removeQuestion(bankId, question);
  };

  onAddQuestion = (bankId, question) => {
    if (this.state.input) {
      this.props.addQuestion(bankId, question);
      this.setState({ input: '' });
    }
  };

  onTitleChange = e => {
    const newTitle = e.target.value;
    if (e.keyCode == 13 && newTitle) {
      this.setState({ editTitle: false });
      this.props.updateTitle(this.props.id, newTitle);
    }
  };

  renderTitle = title => {
    if (this.state.editTitle) {
      return <input className="title edit-title" placeholder="New title..." onKeyUp={this.onTitleChange} />;
    } else {
      return (
        <h1 className="title" onClick={() => this.setState({ editTitle: true })}>
          {title}
        </h1>
      );
    }
  };

  render() {
    const { title, questions } = this.props;
    const lastUpdated = new Date(this.props.lastUpdated);

    // SORT BY LAST UPDATED TIME
    const questionsList = this.props.questions.map((question, index) => {
      return (
        <li key={index} className="list-group-item">
          <Button className="remove-question" onClick={() => this.onRemoveQuestion(this.props.id, question)}>
            X
          </Button>
          {question}
        </li>
      );
    });

    return (
      <div className="question-bank-card">
        <div className="question-bank-header">
          <h1>Bank #{this.props.id}</h1>
          {this.renderTitle(title)}
          <Button className="btn btn-3 remove-question-bank" onClick={() => this.onRemoveQuestionBank(this.props.id)}>
            Remove
          </Button>
        </div>
        <ul className="question-bank-questions">{questionsList}</ul>
        <input
          className="add-question"
          onChange={e => this.setState({ input: e.target.value })}
          placeholder="Add question..."
          value={this.state.input}
          onKeyUp={e => {
            if (e.keyCode == 13) {
              this.onAddQuestion(this.props.id, this.state.input);
            }
          }}
        />
        <Button className="btn btn-2" onClick={() => this.onAddQuestion(this.props.id, this.state.input)}>
          Add
        </Button>
        <div className="last-updated">
          Last Updated: {lastUpdated.toLocaleDateString()} @ {lastUpdated.toLocaleTimeString()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questionBanks }) {
  return { questionBanks };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { addQuestion, removeQuestion, removeQuestionBank, updateTitle, fetchQuestionBanks },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionBank);
