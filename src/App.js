import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AuthenticatedNav from './AuthenticatedNav';
import { rootReducer } from './redux';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <AuthenticatedNav />
  </Provider>
);

export default App;
