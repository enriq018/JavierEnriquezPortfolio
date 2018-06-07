import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import Projects from './Projects.jsx';


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Home',
      resumeActive: false,
    };
    this.changeView = this.changeView.bind(this);
    this.resumeClick = this.resumeClick.bind(this);
  }

  resumeClick() {
    this.setState(
      (prevState, props)=> {
        return { resumeActive: !prevState.resumeActive };
      });
  }

  changeView(view) {
    this.setState({ view });
  }

  currentView() {
    const view = {
      Home: <Home resumeClick={this.resumeClick} resumeActive={this.state.resumeActive} />,
      Projects: <Projects />,
    };
    return view[this.state.view];
  }

  render () {
    return (
      <section>
        <NavBar changeView={this.changeView} />
        <div className="">
        {this.currentView()}
        </div>
        </section>
    );
  }
}

export default MainContainer;
