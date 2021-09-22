import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ Home } />
    </Switch>
  );
}

export default App;
