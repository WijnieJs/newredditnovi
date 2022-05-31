import React from 'react';

import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <ul>

        <li className>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to='/subreddit'>
            Subreddit
          </NavLink>

        </li>
      </ul>
    </header>
  );
}

export default Header;
