import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/home.component';
import Runs from './pages/runs/runs.component';
import { GlobalStyle } from './global.styles';

function App() {
  return (
    <div >
      <GlobalStyle />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/runs' component={Runs} />
      </Switch>
    </div>
  );
}

export default App;
