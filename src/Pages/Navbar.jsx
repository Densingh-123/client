import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';


const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">
  <Link to="/">
    <img src="https://www.dens.org.uk/wp-content/uploads/2020/06/DENS_logo.png" alt="Logo" />
  </Link>
</div>

      <ul className="nav-links">
        <li>
          <Link to="/add" className="nav-link">Add New Book</Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">Login/Register</Link>
        </li>
        <li>
          <button className="theme-toggle-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️ '}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
