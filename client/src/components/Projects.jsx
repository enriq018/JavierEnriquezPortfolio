import React, { Component } from 'react';

const Projects = props => (
  <div className="container is-fluid projects">
    <div id="flow">
      <span className="flow-1"></span>
      <span className="flow-2"></span>
      <span className="flow-3"></span>
    </div>
    <div className="feed">
    <div className="drop">
    <br/>
    </div>

    {/* Card Section Start */}
      <div className="row columns">
          {/* Card Section Start */}
          <div className="column is-6">
          <div className="card large">
            <div className="card-image">
              <figure className="image">
                <img className="projectPic" src="https://javier-enriquez.000webhostapp.com/FWTMock2.jpg
                " alt="Image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic
                beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam
                animi!
              </div>
            </div>
          </div>
        </div>

        <div className="column is-6">
        <div className="card large">
          <div className="card-image">
            <figure className="image">
              <img className="projectPic" src="https://javier-enriquez.000webhostapp.com/sys_architecture_v3.png
              " alt="Image" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-96x96">
                  <img src="http://www.radfaces.com/images/avatars/alex-mack.jpg" alt="Image" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">Alex Mack</p>
                <p className="subtitle is-6">Moderator</p>
              </div>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic
              beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam
              animi!
            </div>
          </div>
        </div>
      </div>



          {/* Card Section End */}
      </div>

      <div className="row columns">
      {/* Card Section Start */}
      <div className="column is-6">
      <div className="card large">
        <div className="card-image">
          <figure className="image">
            <img src="https://source.unsplash.com/qbtyUQtqJ8k" alt="Image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-96x96">
                <img src="http://www.radfaces.com/images/avatars/alex-mack.jpg" alt="Image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">Alex Mack</p>
              <p className="subtitle is-6">Moderator</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic
            beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam
            animi!
          </div>
        </div>
      </div>
    </div>

    <div className="column is-6">
    <div className="card large">
      <div className="card-image">
        <figure className="image">
          <img src="https://source.unsplash.com/qbtyUQtqJ8k" alt="Image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-96x96">
              <img src="http://www.radfaces.com/images/avatars/alex-mack.jpg" alt="Image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Alex Mack</p>
            <p className="subtitle is-6">Moderator</p>
          </div>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic
          beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam
          animi!
        </div>
      </div>
    </div>
  </div>



      {/* Card Section End */}
  </div>


    </div>
    {/* Card End */}
  </div>
);

export default Projects;