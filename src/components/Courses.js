import React from 'react';
import { NavLink } from 'react-router-dom';

function Courses() {
  const handleNavLinkClick = (newTitle) => {
    document.title = newTitle;
  };

  return (
    <div className="flex-container">
      <NavLink
        to="/javascript"
        className="flex-item javascript"
        onClick={() => handleNavLinkClick('JavaScript ES5/ES6 jQuery')}
      >
        JavaScript ES5/ES6
      </NavLink>
      <NavLink
        to="/html"
        className="flex-item html"
        onClick={() => handleNavLinkClick('HTML')}
      >
        HTML
      </NavLink>
      <NavLink
        to="/reactjs"
        className="flex-item reactjs"
        onClick={() => handleNavLinkClick('ReactJS')}
      >
        ReactJS
      </NavLink>
    </div>
  );
}

export default Courses;
