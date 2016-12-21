import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';

import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Work from './components/Work/Work';
import Interests from './components/Interests/Interests';

const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/interests" component={Interests} />
      <Route path="*" component={HomePage} />
    </Route>
  </Router>
);

export default Routes;
