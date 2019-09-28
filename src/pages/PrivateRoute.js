import React, { useContext } from "react";
import { Route, Redirect } from "react-router";

import { DataContext } from "contexts/DataContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(DataContext);

  return isAuth ? (
    <Route render={() => <Component {...rest} />} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
