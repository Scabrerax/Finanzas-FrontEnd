import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../components/home/Home";
import { Login } from "../components/login/Login";
import { Register } from "../components/register/Register";

export const AppRouters = () => {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register}/>
          <Route exact path="/home" component={Home} />

          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
};
