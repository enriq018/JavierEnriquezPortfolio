import React, { Component } from 'react';

const About = () => (

  <section className="features">
    <h3 className="title">About Me</h3>
    <p>I'm a results driven problem solver who's always looking to bring value to those around me
     while having a good time! I thrive in new environments and enjoy working on complex problems.</p>
    <hr/>

    <ul className="grid">
      <li>
        <i className="fas fa-user-circle"></i>
        <h4>Personal</h4>
        <p>I'm a San Diego native currently living in San Francisco with the intent of bettering the world
        through technology.
        When I'm not coding you can find me rock climbing, keeping up with anything sports/esports related (Warriors,
          Team Liquid, Patriots), or adventuring around SF.
        </p>
      </li>
      <li>
        <i className="fa fa-school"></i>
        <h4>Web Development</h4>
        <p>I'm a self taught programmer and recently completed Hack Reactor's Advanced Immersive
        Software Engineering Program to refine my engineering skills & best industry practices.
        </p>
      </li>
      <li>
      <i className="fa fa-graduation-cap"></i>
      <h4>Education</h4>
        <p>I graduated from California State University San Marcos with a Bachelor of Arts in
         Criminology & Justice Studies. My goal is to help combine the power of technology with
         the depths of sociology.
        </p>
      </li>
      </ul>
  </section>
);

export default About;
