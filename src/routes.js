import React from 'react';
import { Router, Route } from 'react-router';

import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={HomePage} />
    <Route path="/about" component={About} />
  </Router>
);

export default Routes;
