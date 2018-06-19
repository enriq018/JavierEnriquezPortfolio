import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';
import Landing from './components/Landing.jsx';
import RecentProjects from './components/RecentProjects.jsx';


const App = () => (
  <div>
    <Nav />
    <Landing />
    <RecentProjects />

  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));
