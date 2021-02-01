import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePageManager from "../HomePage/HomePageManager";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { UserProfileContext } from "../providers/UserProfileProvider";

const ApplicationViews = () => {
  const { isLoggedIn } = useContext(UserProfileContext);
  const { isAdmin } = useContext(UserProfileContext);

  return (
    <Switch>
      <Route path="/" exact>
        {isLoggedIn ? <HomePageManager /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default ApplicationViews;
