import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.jsx';
import Landing from './components/Landing.jsx';
import RecentProjects from './components/RecentProjects.jsx';
import About from './components/About.jsx';

const SocialMedia = () => (
  <ul>
  <li>
    <a>
      <i onClick={()=> window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')} className="fab fa-snapchat-square"></i>
    </a>
  </li>
  <li>
  <a>
  <i onClick={()=> window.open('https://www.facebook.com/javier.enriquez.77736', '_blank')} className="fab fa-facebook-square"></i>
  </a>
  </li>
  <li>
  <a>
  <i onClick={()=> window.open('https://github.com/enriq018/', '_blank')} className="fab fa-github-square"></i></a></li>
  <li>
  <a>
    <i onClick={()=> window.open('https://www.linkedin.com/in/javier-enriquez/', '_blank')} className="fab fa-linkedin"></i>
  </a>
</li>
  <li>
    <a>
      <i onClick={()=> window.open('https://twitter.com/_JavierEnriquez', '_blank')} className="fab fa-twitter-square"></i>
    </a>
  </li>
</ul>
)


const App = () => (
  <div>
    <Landing />
    <RecentProjects />
    <About />

	<footer>
  <h1 className="title has-text-white-ter"> Contact Information</h1>
  <h3 className="contact-info"> Phone number: (760) 613-2781 </h3>
  <h3 className="contact-info"> Email: jav.enriquez@gmail.com </h3>
  <h3 className="contact-info"> Location: San Francisco, California </h3>
  <br/>

  <p>Growth > Fixed mindset</p>
  <SocialMedia />



  <br/>
  <a>Back to top</a>


	</footer>

  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));
