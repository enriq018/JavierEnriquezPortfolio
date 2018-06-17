import React, { Component } from 'react';

const Head = () => (
  <header>
    <h2>
      <a href="#">Website Logo</a>
    </h2>
    <nav>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Products</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contacts</a>
      </li>
    </nav>
  </header>
);

const landingstyle = { 'background-image': 'url(https://noiseaware.io/media/wysiwyg/NoiseAware_Learn_SF.png)' };

const Landing = () => (
  <section className="hero">
  <div className="background-image" style={landingstyle}></div>
  <div className="head">
    <img className="headshot" src="https://javier-enriquez.000webhostapp.com/headshotCutout2.jpg"
    alt="Image" />

  </div>
  <h1>Javier Enriquez</h1>
  <h3>Software Engineer</h3>
  <div className="button-group">
    <a className="button is-info is-large">hello</a>
    <a className="button is-info is-large">hello</a>
    <a className="button is-info is-large">hello</a>
  </div>
</section>
);

const Work = () => (
  <div>
  <section className="our-work">
  <h3 className="title">Recent Projects</h3>
  <div className="row columns">
    <div className="column is-6">
      <div className="card large">
        <div className="card-image">
          <div className="image">
            <img className="projectPic" src="https://javier-enriquez.000webhostapp.com/FWTMock2.jpg" alt="Image" />
          </div>
        </div>
        <div className="card-content">
          <p className="">FunWithTwitch</p>
          <div className="buttons has-addons center">
            <span className="button">Overview</span>
            <span className="button">Stack</span>
            <span className="button">Demo</span>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic
            beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet
            inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae
            magnam animi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur
            ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit
            beatae magnam animi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam
            tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore
            reprehenderit beatae magnam animi!
          </div>
        </div>
      </div>
    </div>
    <div className="column is-6">
      <div className="card large">
        <div className="card-image">
          <div className="image">
            <img className="projectPic" src="https://javier-enriquez.000webhostapp.com/sys_architecture_v3.png" alt="Image" />
          </div>
        </div>
        <div className="card-content">
          <div className="buttons has-addons">
            <span className="button">Yes</span>
            <span className="button">Maybe</span>
            <span className="button">No</span>
          </div>
          <div className="content box">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic
            beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
)


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeActive: false,
    };
  }
  resumeClick() {
    this.setState( (prevState, props)=> { return { resumeActive: !prevState.resumeActive}; });
  }

  render () {
    return (
      <div>
        <Head />
        <Landing />
        <Work />
      </div>

    );
  }
}

export default MainContainer;