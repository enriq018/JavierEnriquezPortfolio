import React, { Component } from 'react';
import Caro from './Caro.jsx';

const SingleProjectComponent = ({ view, changeView, projectInfo, projectPics, projectName }) => (
  <div className="column is-6">
    <div className="card large">
      <div className="card-image">
        <h3 className="title is-dark has-text-centered project-title">{projectName}</h3>
        <Caro pics={projectPics} />
      </div>
      <div className="card-content project-background">
        <div className="buttons has-addons center">
          {Object.keys(projectInfo).map((el, i) => <a onClick={() => changeView(el)}
          className="button is-dark is-outlined caro-button">{el}</a>)}
        </div>
        <div className="content">
          {projectInfo[view]}
        </div>
      </div>
    </div>
  </div>
);

class SingleProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Overview',
    }
    this.changeView = this.changeView.bind(this);
  }
  changeView(view) {
    this.setState({ view });
  }

  render() {
    return (
      <SingleProjectComponent
        projectName={ this.props.projectName }
        view={this.state.view}
        changeView={this.changeView}
        projectInfo={this.props.projectInfo}
        projectPics={this.props.projectPics}
      />
    );
  }
}

export default SingleProject;