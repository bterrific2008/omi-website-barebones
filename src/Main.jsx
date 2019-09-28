import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import AboutPage from './pages/AboutPage';

function Main() {
  return (
    <main>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NoPage} />
      </Switch>
    </main>
  );
}

export default Main;