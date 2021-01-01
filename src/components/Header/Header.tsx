/* eslint-disable no-use-before-define */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => (
  <nav>
    <div className="nav-wrapper blue darken-4 plr1rem">
      <NavLink to="/" className="brand-logo">React+TypeScript</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
export default Header;
