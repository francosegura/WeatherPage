import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import allReducers from './reducers';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import EmptyPage from './screens/Main';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducers, composeEnhancers());

const App = () => {
  return (
      <Router>
        <Provider store={store}>
              <Switch>
                <Route component={EmptyPage} path="/main" />
                <Redirect exact from="/" to="/main" />
              </Switch>
        </Provider>
      </Router>
  );
};

export default App;
