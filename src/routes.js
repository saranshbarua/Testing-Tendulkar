import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./components/Home/home";
import Dashboard from "./components/Dashboard/dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/stats" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
