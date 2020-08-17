/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import "./App.css";

import { store, history } from "./Redux/Store";
import InnerApp from "./Containers/InnerApp";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Provider store={store}>
          <Router history={history}>
            <InnerApp />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
