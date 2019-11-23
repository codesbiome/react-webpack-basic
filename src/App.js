import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home, About, NotFound } from './components';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={NotFound} />
      </Switch>
    </HashRouter>
  );
}
