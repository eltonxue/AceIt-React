import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { verifyToken } from './actions';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import { Home, Register, Login, MyAccount } from './components';
import { Navigation, QuestionBanks, History, Search, Practice } from './containers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };

    const token = document.cookie;
    console.log(token);
    this.props.verifyToken(token);
  }
  componentWillReceiveProps(nextProps) {
    this.verifyAuth();
  }

  componentWillMount() {
    this.verifyAuth();
  }

  verifyAuth() {
    const token = document.cookie;
    if (token) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }
  render() {
    if (this.state.loggedIn) {
      return (
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/question-banks" component={QuestionBanks} />
              <Route path="/history" component={History} />
              <Route path="/search" component={Search} />
              <Route path="/practice" component={Practice} />
              <Route path="/my-account" component={MyAccount} />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ verifyToken }, dispatch);
}

function mapStateToProps({ authentication }, dispatch) {
  return { authentication };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
