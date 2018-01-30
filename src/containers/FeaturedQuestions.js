import React, { Component } from 'react';
import { FeaturedQuestion } from '../components';

class FeaturedQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        { username: 'eltonxue', question: 'How well do you work in a team?' },
        { username: 'piatheplant', question: 'Tell me about yourself.' },
        { username: 'soniaxu96', question: 'Are you a leader or follower?' }
      ]
    };
  }
  render() {
    return (
      <ul>
        <FeaturedQuestion username={this.state.questions[0].username} question={this.state.questions[0].question} />
        <FeaturedQuestion username={this.state.questions[1].username} question={this.state.questions[1].question} />
        <FeaturedQuestion username={this.state.questions[2].username} question={this.state.questions[2].question} />
      </ul>
    );
  }
}

export default FeaturedQuestions;
