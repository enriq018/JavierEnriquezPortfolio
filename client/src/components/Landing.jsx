import React, { Component } from 'react';
import Resume from './Resume.jsx';

const landingstyle = {
  'background-image': 'url(https://noiseaware.io/media/wysiwyg/NoiseAware_Learn_SF.png)'
};

const LandingComponent = ({ resumeClick, resumeActive }) => (
  <section className="hero">
    <Resume resumeClick={resumeClick} resumeActive={resumeActive} />
    <div className="background-image" style={landingstyle} />
    <div className="head">
      <img className="headshot" src="https://javier-enriquez.000webhostapp.com/headshotCutout2.jpg"
        alt="Nice background of Sf"
      />
    </div>
    <h1>Javier Enriquez</h1>
    <h3>Software Engineer</h3>
    <div className="landing-buttons">
      <a className="button is-large is-outlined b" onClick={()=>resumeClick()}>
       <span>Resume </span>
        <span className="icon is-small">
          <i className="far fa-address-card" aria-hidden="true" />
        </span>
      </a>
        <a onClick={()=> window.open('https://www.linkedin.com/in/javier-enriquez/', '_blank')}
        className="button is-large is-outlined b">
          <span>Linkedin</span>
          <span className="icon is-small">
            <i className="fab fa-linkedin" aria-hidden="true" />
          </span>
        </a>
      <a onClick={()=> window.open('https://github.com/enriq018/', '_blank')} className="button is-large is-outlined b">
        <span>GitHub </span>
        <span className="icon ">
          <i className="fab fa-github "></i>
        </span>
      </a>
    </div>
  </section>
);

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeActive: false,
    };
    this.resumeClick = this.resumeClick.bind(this);
  }
  resumeClick() {
    this.setState((prevState, props)=> {
      return { resumeActive: !prevState.resumeActive };
    });
  }

  render() {
    return (
      <LandingComponent resumeClick={this.resumeClick} resumeActive={this.state.resumeActive} />
    );
  }
}

export default Landing;
