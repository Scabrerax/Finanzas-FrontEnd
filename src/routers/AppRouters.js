import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Home } from "../components/home/Home";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../components/login/Login";
import { Register } from "../components/register/Register";
import { useDispatch, useSelector } from "react-redux";
import { startChecking } from "../actions/login";
import { Tablas } from "../components/Tablas/Tablas";

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
            exact path="/login"
            component={Login}
            isLogged={isLogged}
          />
          <PublicRoute
            exact path="/register"
            component={Register}
            isLogged={isLogged}
          />

          <PrivateRoute 
            exact path="/" 
            component={Home} 
            isLogged={isLogged} 
          />
          <PrivateRoute 
            exact path="/tablas" 
            component={Tablas} 
            isLogged={isLogged} 
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
