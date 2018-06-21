import React, { Component } from 'react';

/* Clean this file up later */

const randomTagColor = () => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max) - 1;
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const tags = ['tag is-black', 'tag is-primary', 'tag is-link', 'tag is-info', 'tag is-success', 'tag is-warning', 'tag is-danger'];
  return tags[getRandomInt(0, tags.length)] + ' is-large';
}

const twitchPics = [
  'https://javier-enriquez.000webhostapp.com/FWTMock2.jpg',
  'https://javier-enriquez.000webhostapp.com/1screen.png',
  'https://javier-enriquez.000webhostapp.com/2screen.png',
  'https://javier-enriquez.000webhostapp.com/4screens3.png',
  'https://javier-enriquez.000webhostapp.com/4screens2.png',
];
const twitchPicsInfo = [
  'Optimized for both desktop and mobile platforms',
  'Used non-relational cloud database to maintain data persistence',
  'Incorporated Google Sign in to allowing users to save/load streams',
  'Processed Twitch Api data through Express for client side performance',
  'Rendered db data with React components styled via Flexbox/Bulma',
];
const twitchInfo = {

  Overview:
  <div className="project-content">
    <p className="has-text-left">
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
const triPics = [
  'https://javier-enriquez.000webhostapp.com/sys_architecture_v3.png',
   'https://javier-enriquez.000webhostapp.com/user_arch.png',
   'https://javier-enriquez.000webhostapp.com/artileryComparison2.png',
];

const triPicsInfo = [
  'Microservices architecture system design flow chart',
  'User service flow design',
  'Microservice stress test performance results',
];

const triInfo = {

  Overview:
  <div className="project-content">
    <p className="has-text-left">
    Replicated Airbnb microservice architecture to test specific user interations and monitor data flow.</p>
  </div>,

    Stack:
    <div className="project-content">
      <ul className="stack-info">
        <li><div className={randomTagColor()}>Server: Node.js</div></li>
        <li><div className={randomTagColor()}>Back End: MariaDb</div></li>
        <li><div className={randomTagColor()}>Quene:  Amazon Simple Queue Service</div></li>
        <li><div className={randomTagColor()}>Deployment: Amazon EC2</div></li>
        <li><div className={randomTagColor()}>Stress Testing: Artillery</div></li>
      </ul></div>,

    'Full Description':
    <div className="project-content">
      <p className="has-text-left">
      As a team of four engineers, we wanted to replicate a portion of the
      Airbnb Experiences microservice architecture that would allow us to
      handle working with millions of concurrent users and monitor data flow
      between each of our separate microservices. Each service had specific
      goals and needed to maintain a certain level of efficiency so that no
      one service would create a bottleneck for the entire team.
      </p>
      <br />
      <p className="has-text-left">
      The client service and aggregator service both relied on my service to
      operate successfully. Whenever a valid user visited the client, a
      request would be made to my microservice asking for that user’s recent
      search history so that the client service could populate the users view
      with relevant locations. Anytime a user searched for a location, the
      client would make a request to my service so I could check to see if
      this was a newly searched location by the specific user. If it was a new
      search, I would then send the location to the aggregator service so it
      could keep track of most search locations.
      </p>
      <br />

      <p className="has-text-left">
      All of my data had relationships with one or more other data points so a
        <strong className=" has-text-weight-bold bigText">
          {" "}
          relational database{" "}
        </strong>{" "}
        was necessary. I made the decision to use
        <strong className=" has-text-weight-bold bigText">
          {" "}
          MariaDb
        </strong>{" "}
        as my database of choice do to its fast reading speeds. Its writing
        speeds were not as fast as other relational databases, but it was a
        tradeoff I was willing to take since my service was mainly responsible
        for relaying user info to other services. In order to relay information
        from microservice to microservice, multiple
        <strong className=" words bigText">
        {" "}Amazon Simple Queue Services{" "}
        </strong>{" "}
        were used to exchange data.{" "}
      </p>
    </div>,
    'Stress testing': <div className="project-content">
    <p className="has-text-left">
    Upon building out my microservice and ensuring everything was fully
    functional, the next step was to see how my microservice would perform
    under increased stress. Initially, my microservice was not able to
    perform at a desired level and would cause bottlenecks to the rest of
    the microservice flow if left unchanged so optimizations had to be made.
    This is made evident by only being able to handle about
    <strong className="has-text-danger has-text-weight-bold bigText">
      {" "}
      60 requests per second{" "}
    </strong>{" "}
    and taking a total of 168886.5 milliseconds
    <strong className="has-text-danger has-text-weight-bold bigText">
      {" "}
      (2 min and 50 sec)
    </strong>{" "}
    to complete
    <strong className="has-text-weight-bold bigText">
      {" "}
      10,000 requests{" "}
    </strong>.
    </p>
    <br/>
    <p className="has-text-left">
    My first optimization involved restructuring my database query logic and
        converting a six step query into a four step one. This did improve my
        response per second time, but not significantly enough to be satisfied
        with.
    </p>
    <br/>
    <p className="has-text-left">       My main optimization came from restructuring my MariaDb database schema
    to incorporate
    <strong className="has-text-weight-bold bigText">
      {" "}
      indexing
    </strong>{" "}
    improving lookup speeds. This optimization allowed my microservice to
    handle about
    <strong className="has-text-success has-text-weight-bold bigText">
      {" "}
      1,280 requests per second
    </strong>{" "}
    and finish
    <strong className="has-text-weight-bold bigText">
      {" "}
      10,000 requests
    </strong>{" "}
    in about 6,005 milliseconds
    <strong className="has-text-success has-text-weight-bold bigText">
      {" "}
      (6 seconds)
    </strong>{" "}
    which was well within my teams goal.</p>

    </div>,

  'Video Explanation':  <div className="project-content">
  <div className="video-responsive">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/8zyRCkLPjO0?rel=0"
    frameBorder="10"
    allowFullScreen
  />
  </div>
</div>,
};

const ferretPics = [
  'https://javier-enriquez.000webhostapp.com/ferretMain.png',
   'https://javier-enriquez.000webhostapp.com/ferret6.png',
];

const ferretPicsInfo = [
  'Main lobby displaying all open rooms',
  'Single video viewing room with live chat',
];

const ferretInfo = {

  Overview:
  <div className="project-content">
    <p className="has-text-left">
    Watch videos/chat with other's in real time and share playlist through web sockets
    </p>
  </div>,

    Stack:
    <div className="project-content">
      <ul className="stack-info">
        <li><div className={randomTagColor()}>Front End: React.js / React Router</div></li>
        <li><div className={randomTagColor()}>Server: Node.js</div></li>
        <li><div className={randomTagColor()}>Websocket: Socket.IO</div></li>
        <li><div className={randomTagColor()}>Back End: Postgres</div></li>
        <li><div className={randomTagColor()}>Deployment: Heroku</div></li>
        <li><div className={randomTagColor()}>Auth: Facebook</div></li>
      </ul></div>,

    'Full Description':
    <div className="project-content">
      <p className="has-text-left">
      WeAreFerrets allows multiple users to join various rooms together and
      view Youtube video content simultaneously. This is accomplished through
      the use of{" "}
      <strong className="has-text-weight-bold bigText">
        React Router
      </strong>{" "}
      to reroute a user to a specific room and using{" "}
      <strong className="has-text-weight-bold bigText">
        Socket.IO{" "}
      </strong>{" "}
      to give each room its own unique websocket connection allowing all users
      within the room to interact with one another.
      </p>
      <br />

      <p className="has-text-left">
      Each unique room id is stored within the{" "}
        <strong className="has-text-weight-bold bigText">
          Postgres
        </strong>{" "}
        database and is used to identify what current playlist is connected to
        each room as well as what the current video/current play time of playing
        video is. Inside of a room, user’s can search for new Youtube videos to
        be added to the video queue, and chat with one another through the built
        in chat client. If a user sign’s in via{" "}
        <strong className="has-text-weight-bold bigText">
          Facebook authentication
        </strong>, they are given the ability to create rooms that others can
        join and contribute to.
      </p>
    </div>,

  'Video Demo':  <div className="project-content">
  <div className="video-responsive">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/JxUqPo_67IE"
    frameBorder="10"
    allowFullScreen
  />
  </div>
</div>,
};

const tweetPics = [
  'https://raw.githubusercontent.com/enriq018/tweetAnalizer/master/TA1.png',
   'https://github.com/enriq018/tweetAnalizer/raw/master/TA2.png',
   'https://github.com/enriq018/tweetAnalizer/raw/master/TA5.png',
   'https://github.com/enriq018/tweetAnalizer/raw/master/TA6.png',
];

const tweetPicsInfo = [
  'Tweets view with twitter user Barrack Obama analyzed',
  'Chart view with twitter user Barrack Obama results',
  'Tweets view with twitter user Steph Curry analyzed',
  'Chart view with twitter user Steph Curry results',


];

const tweetInfo = {

  Overview:
  <div className="project-content">
    <p className="has-text-left">
    Search a twitter user and see each tweet's tone analyzied as well as what the most common tone the user had overall.
    </p>
  </div>,

    Stack:
    <div className="project-content">
      <ul className="stack-info">
        <li><div className={randomTagColor()}>Front End: React.js / Victory.js</div></li>
        <li><div className={randomTagColor()}>Server: Node.js</div></li>
        <li><div className={randomTagColor()}>API: IBM Watson Tone Analyzer</div></li>
        <li><div className={randomTagColor()}>API: Twitter</div></li>
        <li><div className={randomTagColor()}>Deployment: Heroku</div></li>
      </ul></div>,

    'Full Description':
    <div className="project-content">
      <p className="has-text-left">
        This application uses the username of a searched twitter user and finds the user's most recent tweets.
        On the backend it recieves the tweets takes each tweet, and sends it to IBM Watson tone analyzer to get the overall tones of
        the particular tweet. This information is then all visuallized on the frontend and shows what the searched users most common
        tweet tones were as well as each tweet individually analyzed.
        <br/>
        <br/>

        For example a tweet saying "today is the best day ever" would result in a Joyful tone.
      </p>
    </div>,
};

const discordPics = [
  'https://github.com/enriq018/discordLeagueBuildBot/raw/master/README_pics/champEx.png',
   'https://github.com/enriq018/discordLeagueBuildBot/raw/master/README_pics/ggEx.png',

];

const discordPicsInfo = [
  'Entering a characters name "! skarner" returns a text and an image with relevant info',
  'Entering a user\'s name "! name" returns an text and an image with relevant info',
];

const discordInfo = {
  Overview:
  <div className="project-content">
  <p className="has-text-left">
  A bot that responds with information relevant to the request a user asks of it.
  </p>
</div>,

  Stack:
  <div className="project-content">
    <ul className="stack-info">
      <li><div className={randomTagColor()}>Server: Node.js</div></li>
      <li><div className={randomTagColor()}>Deployment: Heroku</div></li>
      <li><div className={randomTagColor()}>discord.js</div></li>
      <li><div className={randomTagColor()}>Webscraping</div></li>
    </ul></div>,

    'Full Description':
    <div className="project-content">
    <p className="has-text-left">
    The bot is always listening to on a discord channel. Anytime a user pings the bot with a specific
    request, the bot replies to the user confirming it has recieved the request and is working on completing its task.
    <br/>
    <br/>
    The information for each task is gathered through either webscraping specific sites, taking a
    screenshot of a certain web pages, or reading information from an internally stored file.
    The data generated is then all complied and sent back in a message format. Some response messages also include an image.
  </p>
    </div>,
};


const ProjectInfo = {
  twitchPics,
  twitchInfo,
  twitchPicsInfo,
  triPics,
  triPicsInfo,
  triInfo,
  ferretPics,
  ferretPicsInfo,
  ferretInfo,
  tweetPics,
  tweetPicsInfo,
  tweetInfo,
  discordPics,
  discordPicsInfo,
  discordInfo,
};

export default ProjectInfo;
