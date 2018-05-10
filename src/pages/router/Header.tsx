import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About"> About </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default connect()(Header);
