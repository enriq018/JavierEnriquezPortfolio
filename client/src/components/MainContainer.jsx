import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Projects from './Projects.jsx';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Projects',
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({ view });
  }

  currentView() {
    const view = {
      Home: <Home />,
      Projects: <Projects />,
    };
    return view[this.state.view];
  }

  render () {
    return (
      <section>
        <NavBar changeView={this.changeView}/>
        {this.currentView()}
      </section>
    );
  }
}

export default MainContainer;
