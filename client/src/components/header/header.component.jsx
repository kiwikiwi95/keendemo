import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './header.styles';

const Header = ({ value }) => {
  return (
    <Nav>
      <NavLink exact activeClassName='active' to='/'>
        <li>Parent {value * 2}</li>
      </NavLink>
      <NavLink activeClassName='active' to='/counter'>
        <li>Counter</li>
      </NavLink>
      <NavLink activeClassName='active' to='/cards'>
        <li>Cards</li>
      </NavLink>
    </Nav>
  );
};

export default Header;
