import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
  return (
    <BrowserRouter basename="/leofuna-portfolio">
      <Switch>
        <Route exact path="/" render={ Home } />
        <Route path="/projetos" render={ Projects } />
        <Route path="/contato" render={ Contact } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
