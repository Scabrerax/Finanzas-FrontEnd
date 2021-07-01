import React from "react";
import PropTypes from 'prop-types'
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
  return (
    <Route {...rest}
      component={(props) => ((isLogged) ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired
}