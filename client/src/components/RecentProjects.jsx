import React, { Component } from 'react';

const RecentProjects = () => (
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

export default RecentProjects;
