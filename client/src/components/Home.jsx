import React, { Component } from 'react';

const Home = props => (
  <div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <figure className="image is-4by3">
              <img src="https://picsum.photos/800/600/?random" alt="Description" />
            </figure>
          </div>
          <div className="column is-6 is-offset-1">
            <h1 className="title is-2">
              Javier Enriquez
            </h1>
            <h2 className="subtitle is-4">
              Software Engineer
            </h2>
            <br/>
            <div className='buttonRow'>
              <p className="has-text-centered">
                <a className="button is-info is-large is-outlined b">
                  Resume
                </a>
              </p>
              <p className="has-text-centered">
                <a className="button is-info is-large is-outlined b">
                  Linkedin
                </a>
              </p>
              <p className="has-text-centered">
                <a className="button is-info is-large is-outlined b">
                  Github
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