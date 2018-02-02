import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store';

import { PersistGate } from 'redux-persist/lib/integration/react';

import App from './App';

// const history = syncHistoryWithStore(browserHistory, store);

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  target
);
