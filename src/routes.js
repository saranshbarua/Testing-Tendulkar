import React from 'react'
import { Switch, Route } from 'react-router-dom'; 

// Components
import App from './App';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>    
  )
};

export default Routes;
