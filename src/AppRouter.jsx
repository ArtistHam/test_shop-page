/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import routes from "./Helpers/routes";
import MainPage from "./Containers/MainPage";
import ProductPage from "./Containers/ProductPage";

class AppRouter extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path={routes.root}
            component={MainPage}
          />
          <Route
            exact
            path={routes.product}
            component={ProductPage}
          />
        </Switch>
      </Router>

    );
  }
}

export default AppRouter;
