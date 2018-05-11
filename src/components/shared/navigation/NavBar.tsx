import * as React from 'react';

import { IRoutes, routes } from './MainRouter';
import { NavBarItem } from './NavBarItem';

class NavBar extends React.Component {
  public render() {
    return (
      <nav>
        <ul>{NavBarList(routes)}</ul>
      </nav>
    );
  }
}

const NavBarList = (routestoRender: IRoutes[]) => {
  return routestoRender.map(route => (
    <NavBarItem
      key={route.link}
      link={route.link}
      menuItemName={route.menuItemName}
    />
  ));
};

export default NavBar;
