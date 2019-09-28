import React from "react";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import Dashboard from "./Dashboard";
import Login from "./Login";
import Transfer from "./Transfer";
import PrivateRoute from "./PrivateRoute";

const history = createBrowserHistory();

const Root = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/transfer" component={Transfer} />
      </Switch>
    </Router>
  );
};

export default Root;
