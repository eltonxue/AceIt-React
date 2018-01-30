import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { FeaturedQuestions } from '../containers';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="jumbotron-label">Ace Your Interview</h1>
          <h2 className="jumbotron-sub-label">Land your dream job.</h2>
          <FeaturedQuestions />
        </Jumbotron>
        <div id="learn-more-container">
          <h1>What is AceIt?</h1>
          <p>
            Have you ever had trouble with your interviews? Do your nerves make you seem less qualified than you
            actually are? AceIt is a web application that looks to solve these problems. It allows you to create your
            own custom question banks and conduct mock interviews with them. The application records your response,
            analyzes it, and then provides feedback that range from the level of emotion in your words to how confident
            you are.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
