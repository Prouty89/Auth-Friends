import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import List from './components/List';
import ConfigureFriend from './components/ConfigureFriend'

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friends" component={List} />
        <PrivateRoute path="/addFriend" component={ConfigureFriend} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;