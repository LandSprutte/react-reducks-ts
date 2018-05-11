import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { IRoutes } from './MainRouter';

export const NavBarItem = (props: IRoutes) => {
  return (
    <li>
      <NavLink to={props.link} activeClassName={'active'}>
        {props.menuItemName}
      </NavLink>
    </li>
  );
};
