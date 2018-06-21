import React, { Component } from 'react';
import SingleProject from './SingleProject.jsx';
import ProjectInfo from './ProjectInfo.jsx';


const RecentProjects = () => (
  <div>
    <section className="our-work">
      <h3 className="title">Recent Projects</h3>
      <hr/>

      <div className="row columns">
        <SingleProject
          projectInfo={ProjectInfo.twitchInfo}
          projectName={'FunWithTwitch'}
          projectPics={ProjectInfo.twitchPics}
          projectPicsInfo={ProjectInfo.twitchPicsInfo}
        />
        <SingleProject
          projectInfo={ProjectInfo.triInfo}
          projectName={'Triforce Essence'}
          projectPics={ProjectInfo.triPics}
          projectPicsInfo={ProjectInfo.triPicsInfo}
        />
      </div>
      <div className="row columns">
        <SingleProject
          projectInfo={ProjectInfo.ferretInfo}
          projectName={'WeAreFerrets'}
          projectPics={ProjectInfo.ferretPics}
          projectPicsInfo={ProjectInfo.ferretPicsInfo}
        />
        <SingleProject
          projectInfo={ProjectInfo.tweetInfo}
          projectName={'Tweet Analyzer'}
          projectPics={ProjectInfo.tweetPics}
          projectPicsInfo={ProjectInfo.tweetPicsInfo}
        />
      </div>
      <div className="row columns">
        <SingleProject
          projectInfo={ProjectInfo.discordInfo}
          projectName={'discordLeagueBuildBot'}
          projectPics={ProjectInfo.discordPics}
          projectPicsInfo={ProjectInfo.discordPicsInfo}
          full={true}
        />
      </div>
    </section>
  </div>
);

export default RecentProjects;

