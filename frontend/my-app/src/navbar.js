import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">Rent-a-somth</a>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Link 1</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
