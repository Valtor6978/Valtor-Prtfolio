import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className='d-flex justify-content-between main-header align-items-center'>
      <div>
        <img src="Images/Valtor.svg" alt="Valtor Logo" />
      </div>
      <nav>
        <ul className='d-flex justify-content-between align-items-center'>
          <li><a href="#">cv</a></li>
          <li><a href="#">blog</a></li>
          <li><a href="#"><img src="Images/instagram.svg" alt="" /></a></li>
          <li><a href="#"><img src="Images/github.svg" alt="" /></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
