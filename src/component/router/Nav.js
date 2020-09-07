import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to='/'>
        <h3>Logo</h3>
      </Link>
      <ul className='nav-link'>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/shop'>
          <li>Shop</li>
        </Link>
        <Link to='/shop/:id'>
          <li>ShopDetails</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
