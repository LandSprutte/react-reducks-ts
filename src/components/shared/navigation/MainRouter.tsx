import * as React from 'react';
import { Route, Switch } from 'react-router';

import AboutPage from '../../../pages/About';
import HomePage from '../../../pages/HomePage';

export interface IRoutes {
  link: string;
  menuItemName: string;
}

const MainRouter = () => (
  <main>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/About" component={AboutPage} />
    </Switch>
  </main>
);

export const routes: IRoutes[] = [
  { link: '/', menuItemName: 'Home' },
  { link: '/about', menuItemName: 'About' }
];

export default MainRouter;
