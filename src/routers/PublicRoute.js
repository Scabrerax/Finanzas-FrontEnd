import React from "react";
import PropTypes from 'prop-types'
import { Redirect,Route } from "react-router-dom";

export const PublicRoute = ({isLoggedIn,component: Component,...rest }) => {
  return (
    <Route {...rest}
      component={(props) => ((!isLoggedIn) ? <Component {...props}/> : <Redirect to="/home" />)}
    />
  );
};
PublicRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}
