import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { AboutPage, HomePage, NoPage } from './pages/index';

function Main(t) {
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