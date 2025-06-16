import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/">Solar Explorer</NavLink>
      </div>
      <ul className="navbar-links">
        <li><NavLink to="/" exact="true">Home</NavLink></li>
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            Explore <span className="dropdown-arrow">{isDropdownOpen ? '▲' : '▼'}</span>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><NavLink to="/planets" onClick={toggleDropdown}>Planets</NavLink></li>
              <li><NavLink to="/dwarf-planets" onClick={toggleDropdown}>Dwarf Planets</NavLink></li>
              <li><NavLink to="/moons" onClick={toggleDropdown}>Moons</NavLink></li>
            </ul>
          )}
        </li>
        <li><NavLink to="/glossary">Glossary</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>  
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
