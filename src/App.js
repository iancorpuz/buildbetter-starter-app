import 'react-native-gesture-handler';

import React from 'react';
import { RealmProvider } from 'react-realm-context';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { SCHEMAS, SCHEMA_VERSION } from './database';
import { rootReducer } from './redux';
import AuthenticatedNav from './AuthenticatedNav';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <RealmProvider schema={SCHEMAS} schemaVersion={SCHEMA_VERSION}>
    <Provider store={store}>
      <AuthenticatedNav />
    </Provider>
  </RealmProvider>
);

export default App;
