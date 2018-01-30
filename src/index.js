import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
import store from './store';

import { Home, Register, Login, Logout, MyAccount } from './components';
import { Navigation, QuestionBanks, History, Search, Practice } from './containers';

// const history = syncHistoryWithStore(browserHistory, store);

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={Navigation} />
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/question-banks" component={QuestionBanks} />
        <Route exact path="/history" component={History} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/practice" component={Practice} />
        <Route exact path="/my-account" component={MyAccount} />
        <Route exact path="/logout" component={Logout} />
      </div>
    </BrowserRouter>
  </Provider>,
  target
);
