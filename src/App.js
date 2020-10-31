import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Signup from "./Components/signup";
import Login from "./Components/login";
const App = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Layout} />
    </Switch>
  );
};

export default App;
