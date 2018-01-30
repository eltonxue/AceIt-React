import React, { Component } from 'react';
import { Link, push } from 'react-router-dom';

class FeaturedQuestion extends Component {
  render() {
    return (
      <div className="question-card">
        <Link className="username-logged-in" to={this.props.username}>
          {this.props.username}
        </Link>
        <div className="question">{this.props.question}</div>
      </div>
    );
  }
}

export default FeaturedQuestion;
