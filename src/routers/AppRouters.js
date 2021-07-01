import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Home } from "../components/home/Home";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../components/login/Login";
import { Register } from "../components/register/Register";
import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "../actions/login";

export const AppRouters = () => {

  const { isLogged } = useSelector(state => state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking())
  }, [dispatch])

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/login"
            component={Login}
            isLogged={isLogged}
          />
          <PublicRoute
            path="/register"
            component={Register}
            isLogged={isLogged}
          />

          <PrivateRoute path="/home" component={Home} isLogged={isLogged} />

          <Redirect to="login" />
        </Switch>
      </div>
    </Router>
  );
};
