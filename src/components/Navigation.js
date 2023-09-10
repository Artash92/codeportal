import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const [title, setTitle] = useState('CodePortal');

  const handleClick = (newTitle) => {
    setTitle(newTitle);
    document.title = newTitle;
  };

  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo" style={{ position: 'fixed', top: 0, left: 0, padding: '20px' }}>
          CodePortal.<span className='org'>org</span>
          </h1>
          <nav
            id="navbar"
            className="navbar"
            style={{ position: 'fixed', top: '20px', right: 0, padding: '20px' }}
          >
            <ul>
              <li className="nav-item">
                <NavLink to="/" onClick={() => handleClick('Home')}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" onClick={() => handleClick('About US')}>
                  About US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" onClick={() => handleClick('Services')}>
                  Services
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
