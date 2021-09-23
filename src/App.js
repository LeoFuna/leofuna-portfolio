import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
  return (
    <BrowserRouter basename="/leofuna-portfolio">
      <Switch>
        <Route exact path="/" render={ Home } />
        <Route path="/projects" render={ Projects } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
