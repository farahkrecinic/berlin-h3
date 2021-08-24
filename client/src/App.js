import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import EventDetailsPage from './pages/eventdetails/eventdetails.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/event/:eventId' component={EventDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
