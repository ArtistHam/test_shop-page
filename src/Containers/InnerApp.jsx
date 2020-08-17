/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import "../App.css";
import {
  history,
} from "../Redux/Store";
import Topbar from "./Topbar";
import AppRouter from "../AppRouter";

class InnerApp extends Component {
  render() {
    return (
      <Fragment>
        <Topbar />
        <div className="App">
          <div className="mainContent">
            <AppRouter history={history} />
          </div>
        </div>
      </Fragment>


    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(InnerApp);
