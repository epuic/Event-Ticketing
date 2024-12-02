
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">Login / Register</Link>
          </li>
          <li>
            <Link to="/mytickets" className="nav-link">My Tickets</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
