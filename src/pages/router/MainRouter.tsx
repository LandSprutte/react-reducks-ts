import * as React from 'react';
import { Route, Switch } from 'react-router';

import AboutPage from '../About';
import HomePage from '../HomePage';

const MainRouter = () => (
  <main>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/About" component={AboutPage} />
    </Switch>
  </main>
);

export default MainRouter;
