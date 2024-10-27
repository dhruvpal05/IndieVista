import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItems } from './menuItems';
import { useAuth } from '../contexts/authContext'; // Adjust the path as necessary
import './NavbarStyles.css';

const Navbar = () => {
  const { userLoggedIn } = useAuth(); // Get the user's logged-in status
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className='NavbarItems'>
      <a href='/' className='navbar-logo'>
        {'<<IndieVista>>'}
      </a>

      <div className='menu-icons' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {menuItems.map((item, ind) => (
          <li key={ind}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
        {!userLoggedIn && ( // Conditionally render the Sign Up button
          <a href='/signup'>
            <button>Sign Up</button>
          </a>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
