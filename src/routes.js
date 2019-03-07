import React from 'react'
import { Switch, Route } from 'react-router-dom'; 

// Components
import Home from './components/Home/home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>    
  )
};

export default Routes;
