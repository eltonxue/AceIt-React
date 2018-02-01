import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const persistConfig = {
  key: 'root',
  storage: storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(persistedReducer, initialState, composedEnhancers);
const persistor = persistStore(store);

let rootSagas = sagaMiddleware.run(rootSaga);

export { store, persistor };
