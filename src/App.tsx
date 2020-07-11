import React from "react";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import allReducers from "./reducers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import WeatherPage from "./screens/Weather";
import rootSaga from "./sagas/rootSaga";
import moment from "moment";
import "moment/locale/es";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

moment.locale("es");

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route component={WeatherPage} path="/main" />
          <Redirect exact from="/" to="/main" />
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
