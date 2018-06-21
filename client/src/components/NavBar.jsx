import React, { Component } from 'react';

const NavBar = ({ changeView }) => (
  <div className='is-fixed-top' id="nav">
    <ul className="navBar">
      <li className="button is-outlined is-small" onClick={()=> changeView("Home")}>Home</li>
      <li className="button is-outlined is-small" onClick={()=> changeView("Projects")}>Projects</li>
      <li className="button is-outlined is-small" onClick={()=> changeView("About")}>About</li>
    </ul>
  </div>
);

export default NavBar;
