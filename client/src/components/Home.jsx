import React, { Component } from 'react';
import Resume from './Resume.jsx';


const Home = ({ resumeClick, resumeActive }) => (
  <div className="home">
    <div className="hero-body">
    <Resume resumeClick={resumeClick} resumeActive={resumeActive}/>
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <figure className="image is-4by3">
              <img src="https://picsum.photos/800/600/?random" alt="Description" />
            </figure>
          </div>
          <div className="column is-6 is-offset-1">
            <h1 className="title is-1">
              Javier Enriquez
            </h1>
            <h2 className="subtitle is-3">
              Software Engineer
            </h2>
            <br/>
            <div className='buttonRow'>
              <p className="has-text-centered">
                <a className="button is-info is-large is-outlined b" onClick={()=>resumeClick()}>
                <span>Resume </span>
                <span className="icon is-small">
                <i className="far fa-address-card" aria-hidden="true" />
              </span>
                </a>
              </p>
              <p className="has-text-centered">
                <a onClick={()=> window.open('https://www.linkedin.com/in/javier-enriquez/', '_blank')}
                 className="button is-info is-large is-outlined b">
                  <span>Linkedin</span>
                  <span className="icon is-small">
                  <i className="fab fa-linkedin" aria-hidden="true" />
                </span>
                </a>
              </p>
              <p className="has-text-centered">
                <a  onClick={()=> window.open('https://github.com/enriq018/', '_blank')}
                 className="button is-info is-large is-outlined b">
                 <span>GitHub </span>
                 <span className="icon ">
                   <i className="fab fa-github "></i>
                 </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="hero-foot">
      <div className="container">
        <div className="tabs is-centered">
          <ul>
            <li>
              <a>And this is the bottom</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Home;