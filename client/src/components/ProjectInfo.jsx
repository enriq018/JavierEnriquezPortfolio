import React, { Component } from 'react';

const randomTagColor = () => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max) - 1;
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  };
  const tags = ['tag is-black', 'tag is-primary', 'tag is-link', 'tag is-info', 'tag is-success', 'tag is-warning', 'tag is-danger'];
  return tags[getRandomInt(0, tags.length)] + ' is-large';
}

const twitchPics = ["https://javier-enriquez.000webhostapp.com/FWTMock2.jpg", "https://javier-enriquez.000webhostapp.com/1screen.png", "https://javier-enriquez.000webhostapp.com/2screen.png", "https://javier-enriquez.000webhostapp.com/4screens3.png", "https://javier-enriquez.000webhostapp.com/4screens2.png"]
const twitchInfo = {

  Overview:
  <div className="project-content">
    <p>
    Fun with Twitch allows users to watch multiple twitch streams at once
    and save layouts if they are signed in through their google account.</p>
  </div>,

    Stack:
    <div className="project-content">
      <ul className="stack-info">
        <li><div className={randomTagColor()}>Front End: React</div></li>
        <li><div className={randomTagColor()}>Server: Node.js</div></li>
        <li><div className={randomTagColor()}>Back End: Mlabs</div></li>
        <li><div className={randomTagColor()}>Deployment: Heroku</div></li>
        <li><div className={randomTagColor()}>Auth: Google Auth</div></li>
        <li><div className={randomTagColor()}>API: Twitch API</div></li>
      </ul></div>,

    'Full Description':
    <div className="project-content">
      <p>
        Fun with Twitch allows users to watch multiple twitch streams at once
        and save layouts if they are signed in through their google account.
        This is accomplished by using the{" "}
        <strong className="bigText">Twitch API </strong> to gather a list of the
        current top 20 streamers and populate a dropdown menu within the main
        app’s <strong className="bigText">componentDidMount</strong> method.
      </p>
      <br />
      <p className="has-text-left">
        If a desired streamer isn’t on the list, a user can also search for a
        stream by streamer name as well. Everytime a streamer is selected, the
        React state in the main app of component is updated in a{" "}
        <strong className="bigText">unidirectional </strong> manner. Each stream
        is a seperate react component and the number of screens selected
        determines how many streams are rendered to the user.
      </p>
      <br />

      <p className="has-text-left">
        Upon a user successfully signing in, a GET request is made to my{" "}
        <strong className="bigText">express</strong> server to retrieve all of
        the users previously saved groups and the ability to save/view layouts
        is presented to the user. Saving a group works by sending a POST request
        to my server containing all the current streamers/unique user info and
        then being inserted into a cloud{" "}
        <strong className="bigText">non relational</strong> database(Mlabs). The
        entire application was deployed using{" "}
        <strong className="bigText">Heroku</strong>.
      </p>
    </div>,
  'Demo Link':  <div className="project-content">
  <a
    onClick={() =>
      window.open(
        "http://blooming-chamber-65699.herokuapp.com",
        "_blank"
      )
    }
    className="button is-danger is-large center"
  >
    <span>See it in action </span>
    <span className="icon is-small">
      <i className="fas fa-share" aria-hidden="true" />
    </span>
  </a>
</div>,
}



const ProjectInfo = {
  twitchPics,
  twitchInfo,
}

export default ProjectInfo;
