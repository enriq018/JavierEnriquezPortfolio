import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';
import Landing from './components/Landing.jsx';
import RecentProjects from './components/RecentProjects.jsx';


const App = () => (
  <div>
    <Landing />
    <RecentProjects />

  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));
