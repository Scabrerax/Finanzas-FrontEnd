import React from "react";
import PropTypes from 'prop-types'
import { Redirect, Route } from "react-router-dom";
import {Header} from '../components/header/Header'
import {Footer} from '../components/footer/Footer'

export const PrivateRoute = ({ isLogged, component: Component, ...rest }) => {
  return (
    <>
      <Header />
      <Route {...rest}
        component={(props) => ((isLogged) ? <Component {...props} /> : <Redirect to="/login" />)}
      />
      <Footer/>
    </>
  );
};
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired
}