import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { Home } from "../components/home/Home";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../components/login/Login";
import { Register } from "../components/register/Register";

export const AppRouters = () => {

  // const [isLoggedIn,setisLoggedIn] = useState(false)
  
  // if(localStorage.getItem('token') !== null){
  //   console.log(localStorage.getItem('token'))
  //   setisLoggedIn(true)
  // }
  
  // useEffect(() => {
  //   if(dispatch(startChecking()) === null){
  //     setisLoggedIn(true)
  //   }
  // }, [dispatch])


  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute 
            path='/login'
            component = {Login}
            isLoggedIn={isLoggedIn}
          />
          <PublicRoute 
            path='/register'
            component = {Register}
            isLoggedIn={isLoggedIn}
          />

          <PrivateRoute 
            path='/home'
            component = {Home}
            isLoggedIn={isLoggedIn}
          />

          <Redirect to='login'/>
        </Switch>
      </div>
    </Router>
  );
};
