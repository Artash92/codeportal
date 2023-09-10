import React from 'react';
import { NavLink } from 'react-router-dom';

function Services() {
  const handleNavLinkClick = (newTitle) => {
    document.title = newTitle;
  };

  return (
    <div className="flex-container">
      <NavLink
        to="/weather"
        className="flex-item javascript"
        onClick={() => handleNavLinkClick('Weather')}
      >
        Weather
      </NavLink>
      <NavLink
        to="/keyboard"
        className="flex-item html"
        onClick={() => handleNavLinkClick('Keyboard')}
      >
        Keyboard
      </NavLink>
      <NavLink
        to="/programming_tips"
        className="flex-item javascript"
        onClick={() => handleNavLinkClick('Programming Tips')}
      >
        Programming Tips
      </NavLink>
      <NavLink
        to="/quiz"
        className="flex-item javascript"
        onClick={() => handleNavLinkClick('Online Quiz Html/CSS, JS, ReactJS')}
      >
        Online Quiz
      </NavLink>
    </div>
  );
}

export default Services;
