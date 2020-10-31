import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Layout} />
    </Switch>
  );
};

export default App;
