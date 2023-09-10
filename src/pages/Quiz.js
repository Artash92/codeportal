import React from 'react';
import { NavLink } from 'react-router-dom';

function Quiz() {
  return (
    <div className="flex-container">
     <NavLink  to='/html_css_quiz' className="flex-item javascript">HTML CSS</NavLink>
     <NavLink   to='/js_quiz' className="flex-item html">JavaScript</NavLink>
     <NavLink  to='/react_quiz' className="flex-item html">React JS</NavLink>  
    </div>
  )
}

export default Quiz;