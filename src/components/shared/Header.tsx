import * as React from 'react';
import './Header.css';
import NavBar from './navigation/NavBar';

const Header = () => (
  <div className="header_container">
    <div className="container">
      <div className="grid">
        <NavBar />
      </div>
    </div>
  </div>
);

export default Header;
