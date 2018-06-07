import React, { Component } from 'react';

const NavBar = ({ changeView }) => (
  <div className='navbar is-fixed-top'>
    <ul className="navBar">
      <li className="button is-outlined is-medium" onClick={()=> changeView("Home")}>Home</li>
      <li className="button is-outlined is-medium" onClick={()=> changeView("Projects")}>Projects</li>
      <li className="button is-outlined is-medium" onClick={()=> changeView("About")}>About</li>
    </ul>
  </div>
);

export default NavBar;
