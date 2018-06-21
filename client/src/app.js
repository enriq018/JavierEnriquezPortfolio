import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Landing from './components/Landing.jsx';
import RecentProjects from './components/RecentProjects.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

const App = () => (
  <div>
    <Landing />
    <RecentProjects />
    <About />
    <Footer />
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));
