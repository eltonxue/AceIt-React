import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="jumbotron-label">Ace Your Interview</h1>
          <h2 className="jumbotron-sub-label">Land your dream job.</h2>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
