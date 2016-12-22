import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';

// TODO: Can I make webpack take the js file by the directory name by default?
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import Work from './components/Work/Work';
import Interests from './components/Interests/Interests';
import Charity from './components/Charity/Charity';
import LetsEncrypt from './LetsEncrypt';

const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/interests" component={Interests} />
      <Route path='/charity' component={Charity} />
      <Route path='/.well-known/acme-challenge/I_cDewDgzHGxiGQfbjmLw19Nt6dtiwNw1PUyks9UFB0' component={LetsEncrypt} />
      <Route path="*" component={HomePage} />
    </Route>
  </Router>
);

export default Routes;
