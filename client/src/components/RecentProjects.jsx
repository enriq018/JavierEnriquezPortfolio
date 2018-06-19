import React, { Component } from 'react';
import SingleProject from './SingleProject.jsx';
import ProjectInfo from './ProjectInfo.jsx';

const RecentProjects = () => (
  <div>
    <section className="our-work">
      <h3 className="title">Recent Projects</h3>
      <div className="row columns">
        <SingleProject
          projectInfo={ProjectInfo.twitchInfo}
          projectName={'FunWithTwitch'}
          projectPics={ProjectInfo.twitchPics}
        />
        <SingleProject
          projectInfo={ProjectInfo.twitchInfo}
          projectName={'FunWithTwitch'}
          projectPics={ProjectInfo.twitchPics}
        />
      </div>
      <div className="row columns">
        <SingleProject
          projectInfo={ProjectInfo.twitchInfo}
          projectName={'FunWithTwitch'}
          projectPics={ProjectInfo.twitchPics}
        />
        <SingleProject
          projectInfo={ProjectInfo.twitchInfo}
          projectName={'FunWithTwitch'}
          projectPics={ProjectInfo.twitchPics}
        />
      </div>
      <div className="row columns">
        <SingleProject
          projectInfo={ProjectInfo.twitchInfo}
          projectName={'FunWithTwitch'}
          projectPics={ProjectInfo.twitchPics}
        />
        <SingleProject
          projectInfo={ProjectInfo.twitchInfo}
          projectName={'FunWithTwitch'}
          projectPics={ProjectInfo.twitchPics}
        />
      </div>
    </section>
  </div>
);

export default RecentProjects;

