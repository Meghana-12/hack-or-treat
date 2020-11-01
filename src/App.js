import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Signup from "./Components/Signup/signup";
import Login from "./Components/Login/login";
import Games from "./Components/games";

const App = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/games" component={Games} />
      <Route path="/" component={Layout} />
    </Switch>
  );
};

export default App;
